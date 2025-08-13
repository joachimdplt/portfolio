import { Link } from '@inertiajs/react';
import Tooltip from './Tooltip';

export default function SocialButtons({ withTooltips = false, showProjects = true }) {
    const socialLinks = [
        {
            name: 'CV',
            url: '/cv.pdf',
            icon: '📄',
            ariaLabel: 'Download CV',
            tooltipText: 'Step 1 : Take a quick look to my CV'
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
            url: 'mailto:hello@joachimduplat.com',
            icon: '✉️',
            ariaLabel: 'Email',
            tooltipText: 'Step 5 : Get in touch via email'
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
        // Bouton Projects avec Link (navigation interne)
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
        } else {
            // Autres boutons avec <a>
            button = (
                <a
                    className="btn-icon"
                    href={link.url}
                    target={link.name === 'CV' || link.name === 'Email' ? '_self' : '_blank'}
                    rel={link.name === 'CV' || link.name === 'Email' ? '' : 'noopener noreferrer'}
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
