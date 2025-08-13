import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome() {
    const [name, setName] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            // Stocker le prénom en localStorage
            localStorage.setItem('visitor_name', name.trim());
            console.log('Nom saisi:', name.trim()); // Log simple pour MVP
            // Rediriger vers /hello
            router.visit('/hello');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
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
                                <div className="message-text">Hello, my name is Joachim</div>
                            </div>
                        </div>

                        {/* Question */}
                        <div className="message-bubble">
                            <img 
                                src="/img/user/joachimduplat.jpeg" 
                                alt="Joachim Duplat" 
                                className="avatar"
                            />
                            <div className="message-content">
                                <div className="message-time">send at {currentTime}</div>
                                <div className="message-text">What's your name?</div>
                            </div>
                        </div>

                        {/* Zone de saisie */}
                        <div className="input-section">
                            <form onSubmit={handleSubmit} className="form-spacing">
                                <input 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="input flex-1 max-w-lg" 
                                    placeholder="Enter your name here"
                                    autoFocus
                                />
                                <button type="submit" className="btn-primary">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}