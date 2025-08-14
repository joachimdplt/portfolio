import { Link } from '@inertiajs/react';
import Tooltip from './Tooltip';

export default function SocialButtons({ withTooltips = false, showProjects = true }) {
    const socialLinks = [
        {
            name: 'CV',
            url: '/cv',
            icon: '📄',
            ariaLabel: 'View CV',
            tooltipText: 'Step 1 : Take a quick look to my CV and export as PDF',
            isProject: true
        },
        {
            name: 'Projects',
            url: '/projects',
            icon: '📁',
            ariaLabel: 'View Projects',
            tooltipText: 'Step 2 : Explore my projects and achievements',
            isProject: true
        },
        {
            name: 'GitHub',
            url: 'https://github.com/joachimdplt',
            logo: '/img/logos/github-mark-white.png',
            ariaLabel: 'GitHub',
            tooltipText: 'Step 3 : Check out my code on GitHub'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/joachim-d-645aa5180/',
            logo: '/img/logos/InBug-White.png',
            ariaLabel: 'LinkedIn',
            tooltipText: 'Step 4 : Connect with me on LinkedIn'
        },
        {
            name: 'Email',
            url: 'mailto:joachim@shakepoint.tech?subject=Hello from your portfolio',
            icon: '✉️',
            ariaLabel: 'Email',
            tooltipText: 'Step 5 : Copy email to clipboard'
        }
    ];

    // Filtrer les boutons selon les props
    const filteredLinks = showProjects 
        ? socialLinks 
        : socialLinks.filter(link => !link.isProject);

    const renderButton = (link) => {
        const buttonContent = (
            <>
                {link.logo ? (
                    <img 
                        src={link.logo} 
                        alt={link.name} 
                        className="logo-icon"
                    />
                ) : (
                    link.icon
                )}
            </>
        );

        let button;
        // Boutons internes avec Link (navigation interne)
        if (link.isProject) {
            button = (
                <Link
                    href={link.url}
                    className="btn-icon"
                    title={link.name}
                    aria-label={link.ariaLabel}
                >
                    {buttonContent}
                </Link>
            );
        } else if (link.name === 'Email') {
            // Bouton email avec copie dans le presse-papiers
            button = (
                <button
                    className="btn-icon"
                    onClick={() => {
                        const email = 'joachim@shakepoint.tech';
                        navigator.clipboard.writeText(email).then(() => {
                            alert(`Email copié dans le presse-papiers : ${email}`);
                        }).catch(() => {
                            // Fallback si clipboard ne marche pas
                            const textArea = document.createElement('textarea');
                            textArea.value = email;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textArea);
                            alert(`Email copié dans le presse-papiers : ${email}`);
                        });
                    }}
                    title={link.name}
                    aria-label={link.ariaLabel}
                >
                    {buttonContent}
                </button>
            );
        } else {
            // Autres boutons avec <a>
            button = (
                <a
                    className="btn-icon"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    aria-label={link.ariaLabel}
                >
                    {buttonContent}
                </a>
            );
        }

        // Wrapper avec ou sans tooltip
        if (withTooltips) {
            return (
                <Tooltip key={link.name} text={link.tooltipText}>
                    {button}
                </Tooltip>
            );
        }

        return <div key={link.name}>{button}</div>;
    };

    return (
        <div className="flex items-center justify-center gap-4">
            {filteredLinks.map(renderButton)}
        </div>
    );
}
