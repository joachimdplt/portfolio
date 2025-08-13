import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Projects() {
    const [visitorName, setVisitorName] = useState('');

    useEffect(() => {
        // Récupérer le nom depuis localStorage (optionnel pour cette page)
        const storedName = localStorage.getItem('visitor_name');
        if (storedName) {
            setVisitorName(storedName);
        }
    }, []);

    const project = {
        title: 'adopteunbox.fr',
        url: 'https://adopteunbox.fr',
        emoji: '📦',
        features: [
            'Devis en ligne en 60s',
            'Calcul dynamique volume (0.5–8 m³)',
            'Options étage/ascenseur',
            'Durées 30j/4–6 mois',
            '1–2 déménageurs',
            '4 niveaux d\'assurance',
            'Prix en temps réel',
            'Paiement sécurisé',
            'Dashboard admin (WIP)',
            'Emails transactionnels'
        ]
    };

    return (
        <>
            <Head title="Projects" />
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

                    <div className="kicker">Last projects :</div>

                    <div className="card mt-4">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-white/10 grid place-items-center text-xl">
                                {project.emoji}
                            </div>
                            <div>
                                <div className="font-semibold">{project.title}</div>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="link text-sm"
                                >
                                    {project.url}
                                </a>
                            </div>
                        </div>

                        <div className="grid-2 mt-6">
                            <div>
                                <div className="muted mb-2">Aperçu</div>
                                <div className="surface aspect-video rounded-xl bg-white/5 grid place-items-center">
                                    <div className="text-white/40 text-sm">Preview coming soon</div>
                                </div>
                            </div>
                            <div>
                                <div className="muted mb-2">Key Features</div>
                                <ul className="bullets">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pager mt-6">
                        <Link href="/hello" className="btn-ghost">
                            &lt; Back
                        </Link>
                        <button className="btn-ghost text-white/40 cursor-not-allowed">
                            More &gt;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}