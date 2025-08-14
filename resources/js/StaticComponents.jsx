import { useEffect } from 'react';

// Mock Head component pour le mode statique
export const Head = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return null;
};

// Mock Link component pour le mode statique
export const Link = ({ href, children, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (window.Inertia && window.Inertia.visit) {
            window.Inertia.visit(href);
        } else {
            window.history.pushState({}, '', href);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    };
    
    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

// Mock router pour le mode statique
export const router = {
    visit: (url, options = {}) => {
        if (window.Inertia && window.Inertia.visit) {
            window.Inertia.visit(url, options);
        } else {
            window.history.pushState({}, '', url);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    },
    get: (url, options = {}) => {
        router.visit(url, options);
    },
    post: (url, data, options = {}) => {
        console.warn('POST request in static mode - not supported');
    }
};
