// src/main.src

// Import Three.src
import * as THREE from 'three';

// Import gl-matrix
import { mat3 } from 'gl-matrix';

// Import dat.GUI
import * as dat from 'dat.gui';

// Import Interact.src
import interact from 'interactjs';


let audioContext;
let analyser;
let dataArray;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then((stream) => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source.connect(analyser);
    })
    .catch((err) => {
        console.error('Error accessing microphone:', err);
    });

// 1. Initialize Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Create Scene
const scene = new THREE.Scene();

// 3. Set Up Camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// 4. Handle Window Resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        const avgFrequency = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        // Use audio data to update tiles
        tiles.forEach((tile, index) => {
            const scale = 1 + (avgFrequency / 256) * params.audioSensitivity;
            tile.scale.set(scale, scale, scale);
        });
    }

    renderer.render(scene, camera);
}

animate();

// 6. Create Tiles
const tiles = [];
const tileCount = 4; // Example: 4 panels
const tileGeometry = new THREE.PlaneGeometry(1, 1);
const tileMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

for (let i = 0; i < tileCount; i++) {
    const tile = new THREE.Mesh(tileGeometry, tileMaterial.clone());
    tile.position.x = (i - (tileCount - 1) / 2) * 1.1; // Spread tiles out
    scene.add(tile);
    tiles.push(tile);
}

// 7. Initialize dat.GUI
const gui = new dat.GUI();

// 8. Parameters Object
const params = {
    tileColor: 0xffffff,
    audioSensitivity: 1.0,
};

gui.addColor(params, 'tileColor').name('Tile Color').onChange((value) => {
    tiles.forEach(tile => {
        tile.material.color.set(value);
    });
});

gui.add(params, 'audioSensitivity', 0, 5).name('Audio Sensitivity');
