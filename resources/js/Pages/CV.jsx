import { Head, Link } from '../StaticComponents';

export default function CV() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Head title="CV - Joachim Duplat" />
            <div className="page">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="kicker">Curriculum Vitae</div>

                    {/* Header */}
                    <div className="card mt-4">
                        <div className="text-center">
                            <h1 className="h1 mb-4">Full Stack Developer</h1>
                            <p className="muted">Joachim Duplat</p>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="card mt-6">
                        <div className="muted mb-4">EDUCATION</div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="text-white/60 text-sm min-w-[120px]">April 2025</div>
                                <div>
                                    <div className="font-semibold">RNCP Level 5 Degree: Studi – Graduate Fullstack Developer</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-white/60 text-sm min-w-[120px]">June 2023</div>
                                <div>
                                    <div className="font-semibold">RNCP Level 4 Degree: University of Nantes – DAEU A</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience & Technical Skills */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {/* Professional Experience */}
                        <div className="card">
                            <div className="muted mb-4">PROFESSIONAL EXPERIENCE</div>
                            
                            {/* Adopte un Box */}
                            <div className="mb-8">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="text-white/60 text-sm min-w-[120px]">05-25 / Present</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg mb-1">Adopte un Box (Freelance)</div>
                                        <div className="text-white/70 mb-4">Your simple and convenient storage solution</div>
                                        <ul className="space-y-2">
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Storage service with home pickup and delivery</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Full customer journey management: online quotes, booking, secure payment</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Implementation of the client portal: real-time tracking, inventory, special requests</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Integration of commercial tools: lead tracking, contracts, payments</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Coordination of transporter missions and logistics management</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Process automation: quote calculation, alerts, renewals</div>
                                            </li>
                                            <li className="border-l-2 border-white/20 pl-4 py-2">
                                                <div className="text-white/70 text-sm leading-relaxed">Customer support and management of special cases (changes, additions, removals, cancellations)</div>
                                            </li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                                            <span className="text-white/60 text-sm">Tech Stack:</span> React, Inertia.js, Laravel, MySQL
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Studi Project */}
                            <div>
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="text-white/60 text-sm min-w-[120px]">05-24 / 04-25</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg mb-1">Studi (School Project)</div>
                                        <div className="text-white/70 mb-4">Web and Mobile Application Development</div>
                                        
                                        <div className="mb-4">
                                            <div className="font-medium mb-2">Arcadia Project</div>
                                            <ul className="space-y-2">
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Install and configure a development environment tailored to the web/mobile project</div>
                                                </li>
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Design and build web or mobile user interfaces (static and dynamic)</div>
                                                </li>
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Set up a relational database</div>
                                                </li>
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Develop data access components for SQL and NoSQL</div>
                                                </li>
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Build business logic components on the server side</div>
                                                </li>
                                                <li className="border-l-2 border-white/20 pl-4 py-2">
                                                    <div className="text-white/70 text-sm leading-relaxed">Document the deployment of a dynamic web or mobile application</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                            <span className="text-white/60 text-sm">Tech Stack:</span> React, Inertia.js, Laravel, MySQL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="card">
                            <div className="muted mb-4">TECHNICAL SKILLS</div>
                            
                            <div className="space-y-6">
                                {/* Frontend */}
                                <div>
                                    <div className="font-semibold mb-3">Frontend</div>
                                    <ul className="space-y-2">
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Languages & libraries</div>
                                            <div className="text-white/70 text-sm leading-relaxed">React, TypeScript</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">API requests handling</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Axios, Fetch API</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Navigation & rendering</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Inertia.js</div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Backend */}
                                <div>
                                    <div className="font-semibold mb-3">Backend</div>
                                    <ul className="space-y-2">
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Languages & frameworks</div>
                                            <div className="text-white/70 text-sm leading-relaxed">PHP, Laravel</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">API management</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Development and consumption of REST APIs with Laravel</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Security & authentication</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Role management, access control</div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Databases */}
                                <div>
                                    <div className="font-semibold mb-3">Databases</div>
                                    <ul className="space-y-2">
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Relational databases</div>
                                            <div className="text-white/70 text-sm leading-relaxed">SQL, MySQL, PostgreSQL</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">NoSQL databases</div>
                                            <div className="text-white/70 text-sm leading-relaxed">MongoDB</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Database design</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Schema design, relationships, optimization</div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Deployment & Hosting */}
                                <div>
                                    <div className="font-semibold mb-3">Deployment & Hosting</div>
                                    <ul className="space-y-2">
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Server management</div>
                                            <div className="text-white/70 text-sm leading-relaxed">SSH, Linux servers, server configuration</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Containerization</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Docker, container orchestration</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">CI/CD</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Automated deployment, version control</div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Project Management */}
                                <div>
                                    <div className="font-semibold mb-3">Project Management</div>
                                    <ul className="space-y-2">
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Documentation</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Technical writing, API documentation, user guides</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">UML & Modeling</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Class diagrams, sequence diagrams, use case diagrams</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Agile methodology</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Scrum, sprint planning, user stories</div>
                                        </li>
                                        <li className="border-l-2 border-white/20 pl-4 py-2">
                                            <div className="font-medium text-white mb-1">Version control</div>
                                            <div className="text-white/70 text-sm leading-relaxed">Git, collaborative development, code review</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pager mt-6">
                        <Link href="/hello" className="btn-ghost">
                            &lt; Back
                        </Link>
                        <button 
                            onClick={handlePrint}
                            className="btn-primary"
                        >
                            🖨️ Print CV
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
