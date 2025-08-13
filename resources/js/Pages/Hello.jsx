import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Hello() {
    const [visitorName, setVisitorName] = useState('');

    useEffect(() => {
        // Récupérer le nom depuis localStorage
        const storedName = localStorage.getItem('visitor_name');
        if (!storedName) {
            // Rediriger vers la page d'accueil si pas de nom
            window.location.href = '/';
        } else {
            setVisitorName(storedName);
        }
    }, []);

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joachim-duplat',
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
                    <div className="profile-header">
                        <img 
                            src="/img/user/joachimduplat.jpeg" 
                            alt="Joachim Duplat" 
                            className="avatar-lg"
                        />
                        <div className="profile-info">
                            <div className="kicker">joachim duplat</div>
                        </div>
                    </div>

                    <h1 className="h1">
                        Hello {visitorName}! What are you looking for?
                    </h1>

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
        </>
    );
}