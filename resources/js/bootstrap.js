import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Gestion d'erreur pour le mode statique
window.addEventListener('error', (event) => {
    if (event.error && event.error.message && event.error.message.includes('JSON')) {
        console.warn('JSON parsing error in static mode - ignoring');
        event.preventDefault();
    }
});

// Intercepter les erreurs de fetch/axios
window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && event.reason.message.includes('JSON')) {
        console.warn('JSON parsing error in static mode - ignoring');
        event.preventDefault();
    }
});
