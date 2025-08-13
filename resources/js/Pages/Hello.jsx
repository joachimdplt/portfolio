import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import TypeWriter from '../Components/TypeWriter';

export default function Hello() {
    const [visitorName, setVisitorName] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {
        // Mettre à jour l'heure en temps réel
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
            }));
        };
        
        updateTime();
        const interval = setInterval(updateTime, 1000);
        
        // Récupérer le nom depuis localStorage
        const storedName = localStorage.getItem('visitor_name');
        if (!storedName) {
            window.location.href = '/';
        } else {
            setVisitorName(storedName);
        }
        
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joachim-d-645aa5180/',
            logo: '/img/logos/InBug-White.png',
            ariaLabel: 'LinkedIn'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/joachimdplt',
            logo: '/img/logos/github-mark-white.png',
            ariaLabel: 'GitHub'
        },
        {
            name: 'Email',
            url: 'mailto:hello@joachimduplat.com',
            icon: '✉️',
            ariaLabel: 'Email'
        }
    ];

    return (
        <>
            <Head title={`Hello ${visitorName}!`} />
            <div className="page">
                <div className="container">
                    <div className="chat-container">
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

                        <div className="mt-8 flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    className="btn-icon"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                    aria-label={link.ariaLabel}
                                >
                                    {link.logo ? (
                                        <img 
                                            src={link.logo} 
                                            alt={link.name} 
                                            className="logo-icon"
                                        />
                                    ) : (
                                        link.icon
                                    )}
                                </a>
                            ))}
                        </div>

                        <Link href="/projects" className="btn-ghost mt-12 inline-flex">
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}