import { Head, Link } from '../StaticComponents';
import { useState, useEffect, useRef } from 'react';

export default function Projects() {
    const [expandedFeatures, setExpandedFeatures] = useState(false);
    const featuresRef = useRef(null);

    const project = {
        title: 'adopteunbox.fr',
        url: 'https://adopteunbox.fr',
        logo: '/img/logos/adopteunbox.png',
        features: [
            'Instant Online Quote - Automated calculation based on address, pickup date, storage duration, volume, and insurance level.',
            'Dual Service Options - With Transport (pickup & delivery included) or Self-Service (drop-off & pickup at warehouse).',
            'Dynamic Volume Estimation - Item selection from a catalog (furniture, appliances, boxes) with automatic space calculation.',
            'Customizable Storage Duration - Flexible, short-term, or medium-term plans with transparent pricing.',
            'Multiple Insurance Plans - Four protection levels — from essential coverage to tailor-made contracts.',
            'Secure Online Payment - Integrated payment gateway with instant booking confirmation.',
            'Client Dashboard - Track contract status, inventory, payment history, and special requests.',
            'Real-Time Inventory Management - Add/remove items during storage, with updated pricing and scheduling.',
            'Sales Team Portal - Manage prospects, send payment links, and track conversions in one place.',
            'Transport & Logistics System - Daily mission planning, QR code tracking for each item, and real-time status updates.'
        ]
    };

    const toggleFeatures = () => {
        setExpandedFeatures(!expandedFeatures);
        
        // Scroll vers la section après un court délai pour laisser l'animation commencer
        if (!expandedFeatures) {
            setTimeout(() => {
                featuresRef.current?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    };

    return (
        <>
            <Head title="Projects" />
            <div className="page">
                <div className="container">
                    <div className="kicker">Last projects :</div>

                    <div className="card mt-4">
                        <div className="flex items-center gap-6">
                            <div className="h-12 w-12 rounded-full bg-white/10 grid place-items-center">
                                <img 
                                    src={project.logo} 
                                    alt={project.title} 
                                    className="h-11 w-11 object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-semibold">
                                    <a 
                                        href={project.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="link hover:text-white transition-colors"
                                    >
                                        {project.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Vidéo */}
                    <div className="card mt-6">
                        <div className="muted mb-4">Project Preview</div>
                        <div className="surface aspect-video rounded-xl bg-white/5 overflow-hidden">
                            <video 
                                src="/video/demo_prospect_adopte.mov"
                                className="w-full h-full object-cover"
                                controls
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Section Key Features */}
                    <div className="card mt-6" ref={featuresRef}>
                        <button 
                            onClick={toggleFeatures}
                            className="muted mb-4 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-left w-full"
                        >
                            Key Features
                            <span className="text-xs transition-transform duration-300">
                                {expandedFeatures ? '▼' : '▶'}
                            </span>
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            expandedFeatures ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="max-h-64 overflow-y-auto pr-2">
                                <ul className="space-y-4 pb-4">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">
                                                {feature.split(' - ')[0]}
                                            </div>
                                            <div className="text-white/70 text-sm leading-relaxed">
                                                {feature.split(' - ')[1]}
                                            </div>
                                        </li>
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