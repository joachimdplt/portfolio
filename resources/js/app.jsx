import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import StaticRouter from './StaticRouter';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Fonction pour détecter si on est en mode statique (Vercel)
const isStaticMode = () => {
    return window.location.hostname.includes('vercel.app') || 
           window.location.hostname.includes('localhost') && !window.location.port;
};

// En mode statique, on utilise notre routeur personnalisé
if (isStaticMode()) {
    const el = document.getElementById('app');
    if (el) {
        const root = createRoot(el);
        root.render(<StaticRouter />);
    }
} else {
    // Mode normal avec Inertia.js
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob('./Pages/**/*.jsx'),
            ),
        setup({ el, App, props }) {
            const root = createRoot(el);
            root.render(<App {...props} />);
        },
        progress: {
            color: '#4B5563',
        },
    });
}
