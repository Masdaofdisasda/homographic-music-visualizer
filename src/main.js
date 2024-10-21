
import * as THREE from 'three';
import * as dat from 'dat.gui';

import {Tile} from './Tile';

// Audio API
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

// Global variables
let tiles = [];
let tileCount = 0;

// Parameters for the GUI
const params = {
    audioSensitivity: 1.0,
    selectedTileId: null,
    tileSelector: null,
    colorController: null,
    cornerFolders: [],
    tileColor: 0xffffff
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
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

        // Update each tile based on audio data
        tiles.forEach(tile => {
            const scale = 1 + (avgFrequency / 256) * params.audioSensitivity;
            tile.mesh.scale.set(scale, scale, scale);
        });
    }

    renderer.render(scene, camera);
}

animate();

function addTile() {
    const tile = new Tile(tileCount);
    tile.mesh.position.x = (tileCount - (tileCount - 1) / 2) * 1.1; // Position the tile
    scene.add(tile.mesh);
    tiles.push(tile);
    tileCount++;

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
    gui.add(params, 'audioSensitivity', 0, 5).name('Audio Sensitivity');

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
}

// Function to update the corner point controls for a tile
function updateCornerControls(tile) {
    // Remove existing corner folders if any
    params.cornerFolders.forEach(folder => params.tileFolder.removeFolder(folder));
    params.cornerFolders = [];

    // Add a folder for each corner
    tile.corners.forEach((corner, index) => {
        const cornerFolder = params.tileFolder.addFolder(`Corner ${index + 1}`);
        cornerFolder.add(corner, 'x', -5, 5).onChange(() => tile.updateGeometry());
        cornerFolder.add(corner, 'y', -5, 5).onChange(() => tile.updateGeometry());
        params.cornerFolders.push(cornerFolder);
    });
}
