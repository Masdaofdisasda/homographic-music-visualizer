const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.src'),
            nodeIntegration: false, // Important for security
            contextIsolation: true, // Important for security
        }
    });

    // Load the local index.html
    win.loadFile('dist/index.html');

    // Open the DevTools (optional)
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window when the dock icon is clicked
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    // On macOS it's common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') app.quit();
});