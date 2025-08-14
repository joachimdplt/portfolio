import { Head } from '../StaticComponents';
import { useState, useEffect } from 'react';
import TypeWriter from '../Components/TypeWriter';
import SocialButtons from '../Components/SocialButtons';

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

                        <div className="mt-8">
                            <SocialButtons withTooltips={true} showProjects={true} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}