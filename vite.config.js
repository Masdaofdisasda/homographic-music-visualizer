import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';

export default defineConfig({
    plugins: [
        electron({
            main: {
                // Entry point for Electron's main process
                entry: 'main.js',
            },
            preload: {
                // Entry point for the preload script
                input: 'src/preload.js', // Adjust this path as necessary
            },
        }),
    ],
    // Other Vite configurations...
});