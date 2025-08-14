import { useState, useEffect } from 'react';

export default function BlinkingBar({ onEnter, onNameSubmit }) {
    const [isVisible, setIsVisible] = useState(true);
    const [name, setName] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(prev => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (name.trim()) {
                    onNameSubmit(name);
                } else if (onEnter) {
                    onEnter();
                }
            } else if (e.key === 'Backspace') {
                e.preventDefault();
                setName(prev => prev.slice(0, -1));
            } else if (e.key.length === 1) {
                setIsTyping(true);
                setName(prev => prev + e.key);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [name, onEnter, onNameSubmit]);

    return (
        <div className="blinking-bar">
            <span className="name-display">{name}</span>
            {isVisible && <div className="bar"></div>}
        </div>
    );
} 