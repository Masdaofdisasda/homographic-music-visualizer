export default {
    optimizeDeps: {
        include: ['three']
    },
    build: {
        outDir: 'dist', // Ensure this matches where Electron expects the files
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three']
                }
            }
        }
    }
};
