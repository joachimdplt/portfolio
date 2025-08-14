import { useState } from 'react';

export default function Tooltip({ children, text }) {
    const [show, setShow] = useState(false);

    return (
        <div 
            className="relative inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center shadow-lg w-80">
                        <div className="text-white text-sm font-medium">
                            {text}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
