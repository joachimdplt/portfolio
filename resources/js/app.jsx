import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Fonction pour détecter si on est en mode statique (Vercel)
const isStaticMode = () => {
    return window.location.hostname.includes('vercel.app') || 
           window.location.hostname.includes('localhost') && !window.location.port;
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // En mode statique, on ne passe pas de props du serveur
        const staticProps = isStaticMode() ? {
            initialPage: {
                component: 'Welcome',
                props: {},
                url: '/',
                version: null
            }
        } : props;

        root.render(<App {...staticProps} />);
    },
    progress: {
        color: '#4B5563',
    },
});
