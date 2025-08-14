import { useState, useEffect } from 'react';
import Welcome from './Pages/Welcome';
import Hello from './Pages/Hello';
import Projects from './Pages/Projects';
import CV from './Pages/CV';

const pages = {
    '/': Welcome,
    '/hello': Hello,
    '/projects': Projects,
    '/cv': CV,
};

export default function StaticRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);
        
        // Mock Inertia.visit pour la navigation
        window.Inertia = {
            ...window.Inertia,
            visit: (url, options = {}) => {
                window.history.pushState({}, '', url);
                setCurrentPath(url);
            }
        };

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const PageComponent = pages[currentPath] || Welcome;

    return <PageComponent />;
}
