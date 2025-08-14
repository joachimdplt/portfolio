import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    define: {
        // Variables d'environnement pour le mode statique
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        'process.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME || 'Joachim Duplat Portfolio'),
    },
    build: {
        // Configuration pour le build statique
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
});
