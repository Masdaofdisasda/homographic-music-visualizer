
import * as THREE from 'three';
import * as dat from 'dat.gui';
import interact from 'interactjs';

import {Tile} from './Tile';
import {EffectComposer, RenderPass, UnrealBloomPass} from 'three/addons';

// Audio API
let audioContext;
let analyser;
let dataArray;

let sampleRate; // Typically 44100 Hz
let fftSize;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then((stream) => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Set fftSize to 256 or your preferred size

        // Now that the audioContext is set up, retrieve the sample rate
        sampleRate = audioContext.sampleRate;
        fftSize = analyser.fftSize;

        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        source.connect(analyser);

        // Call functions that depend on these values after they've been defined
        setupFrequencyBins();
    })
    .catch((err) => {
        console.error('Error accessing microphone:', err);
    });
     // Frequency resolution per bin

// Function to calculate bin indices based on frequency ranges
function getFrequencyBinIndices(frequencyRange) {
    const [startFreq, endFreq] = frequencyRange;
    const binSize = sampleRate / fftSize; // Frequency resolution per bin
    const startIndex = Math.floor(startFreq / binSize);
    const endIndex = Math.ceil(endFreq / binSize);
    return { startIndex, endIndex };
}
let lowFreqIndices;
let midFreqIndices;
let highFreqIndices
// Function to setup frequency bins for low, mid, and high ranges
function setupFrequencyBins() {
    lowFreqIndices = getFrequencyBinIndices([20, 250]);
    midFreqIndices = getFrequencyBinIndices([250, 4000]);
    highFreqIndices = getFrequencyBinIndices([4000, 20000]);
}
// Global variables
let tiles = [];
let tileCount = 0;

// Parameters for the GUI
const params = {
    audioSensitivity: 1.0,
    audioThreshholdLow: 0.1,
    audioThreshholdMid: 0.1,
    audioThreshholdHigh: 0.1,
    selectedTileId: null,
    tileSelector: null,
    colorController: null,
    cornerFolders: [],
    tileColor: 0xffffff,
    tileFolder: null,
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.toneMapping = THREE.AgXToneMapping; // Use a tone mapping method
renderer.toneMappingExposure = 1.0; // Adjust exposure based on the effect you want

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.1, // Strength
    0.1, // Radius
    0.5 // Threshold
);
composer.addPass(bloomPass);
// 4. Handle Window Resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const selectedTile = tiles.find(tile => tile.id === parseInt(params.selectedTileId));
    if (selectedTile) {
        selectedTile.corners.forEach((corner, index) => {
            const handle = document.getElementById(`corner-handle-${index}`);
            if (handle) {
                positionHandle(handle, corner);
            }
        });
    }
}

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    if (analyser) {
        analyser.getByteFrequencyData(dataArray);

        // Extract frequency data for each range
        const lowFreqData = dataArray.slice(lowFreqIndices.startIndex, lowFreqIndices.endIndex);
        const midFreqData = dataArray.slice(midFreqIndices.startIndex, midFreqIndices.endIndex);
        const highFreqData = dataArray.slice(highFreqIndices.startIndex, highFreqIndices.endIndex);

        // Calculate average amplitude for each range
        const avgLowFreq = lowFreqData.reduce((sum, value) => sum + value, 0) / lowFreqData.length;
        const avgMidFreq = midFreqData.reduce((sum, value) => sum + value, 0) / midFreqData.length;
        const avgHighFreq = highFreqData.reduce((sum, value) => sum + value, 0) / highFreqData.length;

        // Normalize amplitudes to range [0, 1]
        const normLowFreq = avgLowFreq / dataArray.length;
        const normMidFreq = avgMidFreq / dataArray.length;
        const normHighFreq = avgHighFreq / dataArray.length;

        // Update visuals based on frequency data
        updateVisuals(normLowFreq, normMidFreq, normHighFreq);
    }

    composer.render();
}
function updateVisuals(normLowFreq, normMidFreq, normHighFreq) {
    // Change a random tile color when low frequency exceeds threshold
    if (normLowFreq * params.audioSensitivity > params.audioThreshholdLow) {
        // Change multiple tiles instead of just one
        const numTilesToChange = Math.floor(Math.random() * 3) + 1; // Randomly select 1-3 tiles
        for (let i = 0; i < tiles.length; i++) {
            const targetTile = tiles[Math.floor(Math.random() * tiles.length)];
            // Allow higher than 1 color values (HDR)
            const color = new THREE.Color(
                Math.random(),  // Red
                Math.random(),  // Green
                Math.random()   // Blue
            );
            targetTile.setColor(color);
        }
    }

    // Adjust saturation and brightness of all tiles based on high frequencies
    tiles.forEach(tile => {
        const color = new THREE.Color(tile.originalColor);
        const hsl = {};
        color.getHSL(hsl);

        // Adjust saturation based on high frequencies
        hsl.s = THREE.MathUtils.clamp(normHighFreq, params.audioThreshholdHigh, 1);
        // Adjust lightness based on mid frequencies to create a bloom/brightness effect
        hsl.l = THREE.MathUtils.clamp(hsl.l + normMidFreq * 0.4, 0, 1.1); // Allow lightness above 1

        color.setHSL(hsl.h, hsl.s, hsl.l);
        tile.material.color.set(color);
    });

    // Update bloom strength dynamically based on frequency
    bloomPass.strength = 0.1 +  normLowFreq * 0.8; // Increase bloom with bass
    bloomPass.radius = THREE.MathUtils.clamp(normMidFreq * 0.005, 0, 0.1); // Adjust bloom radius with mids
    bloomPass.threshold = 0.85 - normHighFreq * 0.1; // Adjust threshold with highs
}


animate();

function addTile() {
    const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());
    const tile = new Tile(tileCount, randomColor.getHex());
    scene.add(tile.mesh);
    tiles.push(tile);
    tileCount++;
    params.selectedTileId = tile.id;

    // Update GUI with the new tile
    updateTileList();
}

// Initialize dat.GUI
const gui = new dat.GUI();

// Add GUI elements
initializeGUI();
addTile(); // Add an initial tile
updateTileList(); // Populate the GUI with the initial tile


// Function to initialize the GUI structure
function initializeGUI() {
    // Add the "Add Tile" button
    gui.add({ addTile }, 'addTile').name('Add Tile');

    // Add audio sensitivity control
    gui.add(params, 'audioSensitivity', 0, 10).name('Audio Sensitivity');
    gui.add(params, 'audioThreshholdLow', 0, 1).name('Audio Threshhold Low');
    gui.add(params, 'audioThreshholdMid', 0, 1).name('Audio Threshhold Mid');
    gui.add(params, 'audioThreshholdHigh', 0, 1).name('Audio Threshhold High');

    // Add a color picker for general tile color change
    gui.addColor(params, 'tileColor').name('Global Tile Color').onChange((value) => {
        tiles.forEach(tile => tile.setColor(value));
    });

    // Create a folder for individual tile settings
    params.tileFolder = gui.addFolder('Tile Settings');
    params.tileFolder.open();
}

// Function to update the tile list in the GUI
function updateTileList() {
    // Remove the existing tile selector if it exists
    if (params.tileSelector) {
        params.tileFolder.remove(params.tileSelector);
    }

    // Get a list of tile IDs to populate the dropdown
    const tileIds = tiles.map(tile => tile.id.toString());
    params.selectedTileId = tileIds[0] || null; // Set to the first tile or null if no tiles exist

    // Add a new tile selector control to the GUI
    params.tileSelector = params.tileFolder.add(params, 'selectedTileId', tileIds)
        .name('Select Tile')
        .onChange(updateTileSettings);

    // Call updateTileSettings to reflect the initial selection if there are tiles
    if (params.selectedTileId !== null) {
        updateTileSettings();
    }
}

// Function to update the settings for the selected tile
function updateTileSettings() {
    // Find the selected tile based on its ID
    const selectedTile = tiles.find(tile => tile.id.toString() === params.selectedTileId);

    if (!selectedTile) return;

    // Update tile-specific color control
    if (params.colorController) {
        params.tileFolder.remove(params.colorController);
    }
    params.colorController = params.tileFolder.addColor(selectedTile, 'color')
        .name('Tile Color')
        .onChange(value => selectedTile.setColor(value));

    // Update the corner point controls for the selected tile
    updateCornerControls(selectedTile);

    // Create corner handles for the selected tile
    createCornerHandles(selectedTile);
}

// Function to update the corner point controls for a tile
function updateCornerControls(tile) {
    // Remove existing corner folders if any
    params.cornerFolders.forEach(folder => params.tileFolder.removeFolder(folder));
    params.cornerFolders = [];

    // Add a folder for each corner
    tile.corners.forEach((corner, index) => {
        const cornerFolder = params.tileFolder.addFolder(`Corner ${index + 1}`);
        cornerFolder.add(corner, 'x', -5, 5).onChange(() => {
            tile.updateGeometry();
            positionHandle(document.getElementById(`corner-handle-${index}`), corner);
        });
        cornerFolder.add(corner, 'y', -5, 5).onChange(() => {
            tile.updateGeometry();
            positionHandle(document.getElementById(`corner-handle-${index}`), corner);
        });
        params.cornerFolders.push(cornerFolder);
    });
}
// Function to create draggable corner handles for a tile
function createCornerHandles(tile) {
    // Remove existing handles
    const cornerHandlesDiv = document.getElementById('corner-handles');
    cornerHandlesDiv.innerHTML = '';

    tile.corners.forEach((corner, index) => {
        const handle = document.createElement('div');
        handle.className = 'corner-handle';
        handle.id = `corner-handle-${index}`;
        cornerHandlesDiv.appendChild(handle);

        positionHandle(handle, corner);

        interact(handle).draggable({
            onmove: event => {
                const deltaX = event.dx / (window.innerWidth / 2);
                const deltaY = -event.dy / (window.innerHeight / 2);

                corner.x += deltaX * 5; // Adjust scaling factor as needed
                corner.y += deltaY * 5;

                positionHandle(handle, corner);
                tile.updateGeometry();
            }
        });
    });
}

// Function to position a handle based on the corner's coordinates
function positionHandle(handle, corner) {
    // Convert the corner coordinates to a THREE.Vector3
    const cornerVector = new THREE.Vector3(corner.x, corner.y, 0);

    // Project the vector to screen space using the camera
    cornerVector.project(camera);

    // Convert the projected coordinates to pixel values
    const x = (cornerVector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (cornerVector.y * -0.5 + 0.5) * window.innerHeight;

    // Set the handle's position
    handle.style.left = `${x}px`;
    handle.style.top = `${y}px`;
}
