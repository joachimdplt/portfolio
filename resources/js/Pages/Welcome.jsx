import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome() {
    const [name, setName] = useState('');
    
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
                    <div className="profile-header">
                        <img 
                            src="/img/user/joachimduplat.jpeg" 
                            alt="Joachim Duplat" 
                            className="avatar-lg"
                        />
                        <div className="profile-info">
                            <div className="kicker">joachim duplat</div>
                            <div className="subtitle">send at 12:00</div>
                        </div>
                    </div>

                    <h1 className="h1">Hello, my name is Joachim</h1>
                    <p className="muted mt-4">What's your name?</p>

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
        </>
    );
}