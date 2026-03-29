import React, { useState } from 'react';

export const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first one open

    const items = [
        {
            role: "Project Technical Specialist I",
            org: "MinSU Research Division",
            year: "2025 - 2026",
            description: "Led industrial automation for the Automated Banana Leaf Singeing Machine. Invented a high-efficiency heat exchanger and programmed continuous-type rice hull carbonizer systems.",
            stack: ["Industrial Automation", "Programmer", "Hardware Invention"]
        },
        {
            role: "Web Developer Intern",
            org: "CHED MIMAROPA",
            year: "2025",
            description: "Built a Full-stack Web Application to automate Purchase Request to Purchase Order conversion. Managed hardware maintenance and network troubleshooting.",
            stack: ["Full Stack", "Troubleshooting", "System Automation"]
        },
        {
            role: "BS Information Technology",
            org: "Mindoro State University",
            year: "2021 - 2025",
            description: "Graduated with a General Weighted Average of 1.55. Focused on Software Engineering, Industrial Automation, and Web Systems. Served as Business Manager for the IT Society.",
            stack: ["Software Engineering", "System Analysis", "Database Management"],
            isEducation: true // Custom flag for styling
        },
    ];

    return (
        <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
            <h3 className="text-[10px] font-black mb-6 text-gray-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Professional Path</h3>

            <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100 dark:before:bg-zinc-800">
                {items.map((item, i) => (
                    <div key={i} className="relative pl-7 group">
                        {/* Timeline Node */}
                        <div className={`absolute left-0 top-1 w-[15px] h-[15px] rounded transition-all z-10 ${i === 0 ? 'bg-orange-600 border-2 border-orange-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'bg-white dark:bg-zinc-950 border-2 border-gray-200 dark:border-zinc-700'
                            }`} />

                        <div className="flex flex-col">
                            <div className="flex justify-between items-start">
                                <p className={`text-sm font-black leading-tight max-w-[140px] ${i === 0 ? 'text-orange-600 dark:text-orange-400' : 'text-black dark:text-white'}`}>
                                    {item.role}
                                </p>
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                    className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-300 group/btn"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14" height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`text-gray-400 group-hover/btn:text-orange-500 transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-[10px] text-gray-500 dark:text-zinc-400 font-bold uppercase mt-1">{item.org}</p>
                            <p className="text-[9px] font-mono text-gray-400 mt-1">{item.year}</p>

                            {/* Expanded Content */}
                            {expandedIndex === i && (
                                <div className="mt-3 space-y-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-[11px] leading-relaxed text-gray-600 dark:text-zinc-400 border-l-2 border-gray-100 dark:border-zinc-800 pl-3">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.stack.map(tech => (
                                            <span key={tech} className="text-[8px] font-bold px-2 py-0.5 bg-gray-50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-500 rounded border border-gray-100 dark:border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};