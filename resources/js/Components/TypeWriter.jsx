import { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed = 50, delay = 0, onComplete }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (delay > 0) {
            const timer = setTimeout(() => {
                setIsTyping(true);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            setIsTyping(true);
        }
    }, [delay]);

    useEffect(() => {
        if (!isTyping || currentIndex >= text.length) {
            if (currentIndex >= text.length && onComplete) {
                onComplete();
            }
            return;
        }

        const timer = setTimeout(() => {
            setDisplayText(prev => prev + text[currentIndex]);
            setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
    }, [currentIndex, text, speed, isTyping, onComplete]);

    return (
        <span className="message-text">
            {displayText}
            {isTyping && currentIndex < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
} 