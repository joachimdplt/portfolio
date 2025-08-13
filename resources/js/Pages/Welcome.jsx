import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import TypeWriter from '../Components/TypeWriter';
import BlinkingBar from '../Components/BlinkingBar';

export default function Welcome() {
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showInput, setShowInput] = useState(false);
    
    const [currentTime] = useState(() => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    });
    
    useEffect(() => {
        // Vérifier si le nom est déjà en localStorage
        const storedName = localStorage.getItem('visitor_name');
        if (storedName) {
            // Rediriger vers /hello si le nom existe déjà
            router.visit('/hello');
        }
    }, []);

    const handleNameSubmit = (inputName) => {
        if (inputName && inputName.trim()) {
            localStorage.setItem('visitor_name', inputName.trim());
            console.log('Nom saisi:', inputName.trim());
            router.visit('/hello');
        }
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="page">
                <div className="container">
                    <div className="chat-container">
                        {/* Message de Joachim */}
                        <div className="message-bubble">
                            <img 
                                src="/img/user/joachimduplat.jpeg" 
                                alt="Joachim Duplat" 
                                className="avatar"
                            />
                            <div className="message-content">
                                <div className="message-time">send at {currentTime}</div>
                                <TypeWriter 
                                    text="Hello, my name is Joachim" 
                                    speed={50}
                                    onComplete={() => {
                                        setTimeout(() => setShowSecondMessage(true), 500);
                                    }}
                                />
                            </div>
                        </div>

                        {/* Question - sans photo */}
                        {showSecondMessage && (
                            <div className="message-bubble">
                                <div className="message-content ml-0">
                                    <div className="message-time">send at {currentTime}</div>
                                    <TypeWriter 
                                        text="What's your name?" 
                                        speed={50}
                                        delay={200}
                                        onComplete={() => {
                                            setTimeout(() => setShowInput(true), 300);
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Barre clignotante */}
                        {showInput && (
                            <div className="input-section">
                                <BlinkingBar 
                                    onNameSubmit={handleNameSubmit}
                                    onEnter={() => {
                                        // Fallback si pas de nom saisi
                                        const demoName = "Visitor";
                                        handleNameSubmit(demoName);
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}