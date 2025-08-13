import { Head, router, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import TypeWriter from '../Components/TypeWriter';
import BlinkingBar from '../Components/BlinkingBar';
import SocialButtons from '../Components/SocialButtons';

export default function Welcome() {
    const [showSecondMessage, setShowSecondMessage] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showHelloContent, setShowHelloContent] = useState(false);
    const [visitorName, setVisitorName] = useState('');
    
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
            setVisitorName(storedName);
            setShowHelloContent(true);
        }
    }, []);

    const handleNameSubmit = (inputName) => {
        if (inputName && inputName.trim()) {
            const name = inputName.trim();
            localStorage.setItem('visitor_name', name);
            setVisitorName(name);
            console.log('Nom saisi:', name);
            setShowHelloContent(true);
        }
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="page">
                <div className="container">
                    <div className="chat-container">
                        {/* Chat initial - seulement visible si pas encore de nom */}
                        {!showHelloContent && (
                            <>
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
                            </>
                        )}

                        {/* Contenu Hello - visible après soumission du nom */}
                        {showHelloContent && (
                            <>
                                {/* Message de réponse Hello */}
                                <div className="message-bubble">
                                    <img 
                                        src="/img/user/joachimduplat.jpeg" 
                                        alt="Joachim Duplat" 
                                        className="avatar"
                                    />
                                    <div className="message-content">
                                        <div className="message-time">send at {currentTime}</div>
                                        <TypeWriter 
                                            text={`Hello ${visitorName}! What are you looking for?`}
                                            speed={50}
                                        />
                                    </div>
                                </div>

                                {/* Boutons sociaux */}
                                <div className="mt-8">
                                    <SocialButtons withTooltips={true} showProjects={true} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}