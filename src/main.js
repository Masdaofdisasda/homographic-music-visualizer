
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

// Function to save tiles to localStorage
function saveTiles() {
    const tilesData = tiles.map(tile => tile.toObject());
    localStorage.setItem('tiles', JSON.stringify(tilesData));
}

function clearTiles() {
    tiles = [];
    localStorage.removeItem('tiles');
}

// Function to load tiles from localStorage
function loadTiles() {
    const tilesData = JSON.parse(localStorage.getItem('tiles'));

    if (tilesData) {
        tiles = tilesData.map(data => Tile.fromObject(data));
        tiles.forEach(tile => {
            scene.add(tile.mesh);
        });
        tileCount = tiles.length;
    }
}

// Parameters for the GUI
const params = {
    audioSensitivityLow: 0.0,
    audioSensitivityMid: 0.0,
    audioSensitivityHigh: 0.0,
    normLowFreq: 0,
    normMidFreq: 0,
    normHighFreq: 0,
    changeColor: true,
    changeSaturation: true,
    changeLightness: true,
    useBloom: true,
    bpm: 120,
    changeLightsUpTo: 1,
    selectedTileId: null,
    tileSelector: null,
    colorController: null,
    cornerFolders: [],
    tileColor: 0xffffff,
    tileFolder: null,
};

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Use a tone mapping method
renderer.toneMappingExposure = 1.0; // Adjust exposure based on the effect you want

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(0,0,1);
directionalLight.set
scene.add(directionalLight);

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
    0.1,
    0.1,
    0.5
);
composer.addPass(bloomPass);

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

        // Normalize amplitudes to range [0, 1], amplify based on sensitivity
        function boostValue(x, k) {
            if (k === 0) return x;
            const e = Math.exp(k);
            return (Math.exp(k * x) - 1) / (e - 1);
        }
        params.lowFreqData = boostValue(avgLowFreq / dataArray.length, params.audioSensitivityLow);
        params.midFreqData = boostValue(avgMidFreq / dataArray.length, params.audioSensitivityMid);
        params.highFreqData = boostValue(avgHighFreq / dataArray.length, params.audioSensitivityHigh);


        // Update visuals based on frequency data
        updateVisuals(params.lowFreqData, params.midFreqData, params.highFreqData);
    }

    composer.render();
}

let lastBeatTime = 0;
const beatInterval = (60 / params.bpm) * 1000; // Interval between beats in milliseconds


function updateVisuals(normLowFreq, normMidFreq, normHighFreq) {
    const currentTime = performance.now(); // Current time in milliseconds

    // Check if the current time has passed the next beat interval
    if (params.changeColor && currentTime - lastBeatTime > beatInterval && normLowFreq > 0.9) {
        lastBeatTime = currentTime; // Update the last beat time

        // Change tile colors randomly
        const numTilesToChange = params.changeLightsUpTo;
        for (let i = 0; i < numTilesToChange; i++) {
            const targetTile = tiles[Math.floor(Math.random() * tiles.length)];

            const color = new THREE.Color();
            color.setHSL(Math.random(), 0.9, 0.5);
            targetTile.setColor(color);
        }
    }

    if (params.changeSaturation) {
        tiles.forEach(tile => {
            const color = new THREE.Color(tile.color);
            const hsl = {};
            color.getHSL(hsl);

            // Adjust saturation based on high frequencies
            hsl.s = 0.3 + normHighFreq * 0.6; // Increase saturation with highs

            // Adjust lightness based on mid frequencies to create a bloom/brightness effect
            //hsl.l = 0.5 + normMidFreq * 0.5; // Increase lightness with mids

            color.setHSL(hsl.h, hsl.s, hsl.l);
            tile.material.color.set(color);
        });
    }

    if (params.changeLightness) {
        //directionalLight.intensity = 0.5 + normLowFreq * 0.5;
        bloomPass.strength = 0.1 +  normLowFreq * 0.2; // Increase bloom with bass
        bloomPass.radius = normMidFreq * 0.2; // Adjust radius with mids
        //bloomPass.threshold = 0.7 - normHighFreq * 1.0; // Adjust threshold with highs
    }

    if (!params.useBloom) {
        bloomPass.strength = 0;
    }
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
loadTiles();
if (tiles.length === 0) {
    addTile(); // Add an initial tile
} else tileCount = tiles.length;
updateTileList(); // Populate the GUI with the initial tile


// Function to initialize the GUI structure
function initializeGUI() {
    // Add the "Add Tile" button
    gui.add({ addTile }, 'addTile').name('Add Tile');
    gui.add({ save: saveTiles }, 'save').name('Save Tiles');
    gui.add({ load: loadTiles }, 'load').name('Load Tiles');
    gui.add({ reset: clearTiles }, 'reset').name('Reset Tiles');

    // Add audio sensitivity control
    gui.add(params, 'audioSensitivityLow', -10, 10).name('Sensitivity Low (color change)');
    gui.add(params, 'audioSensitivityMid', -10, 10).name('Sensitivity Mid (bloom radius)');
    gui.add(params, 'audioSensitivityHigh', -10, 10).name('Sensitivity High (saturation)');

    gui.add(params, 'changeColor').name('Change Color');
    gui.add(params, 'changeSaturation').name('Change Saturation');
    gui.add(params, 'changeLightness').name('Change Lightness');
    gui.add(params, 'useBloom').name('Use Bloom');
    gui.add(params, 'bpm', 60, 200).name('BPM');
    gui.add(params, 'changeLightsUpTo', 0, 20).name('Change Lights Up To');

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
