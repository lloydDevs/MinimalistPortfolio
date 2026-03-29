import { useState } from 'react';

import { About } from './About';
import Profile from "../assets/my_ava.jpg";

export const Hero = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const awards = [
        { title: "MIMAROPA Chapter Hackathon", rank: "Champion", year: "2024" },
        { title: "DICT Programming 2024", rank: "Champion", year: "2024" },
        { title: "STIRDC Ideathon 2024", rank: "Champion", year: "2024" },
        { title: "MinSU-CCS Mindoro-wide Hackathon", rank: "4th Place", year: "2024" },
        { title: "Hack4Gov3 Cybersecurity CTF", rank: "5th Place", year: "2024" },
        { title: "MinSU-CCS Campus-wide Hackathon", rank: "2nd Place", year: "2023" },
        { title: "Hack4Gov2 Cybersecurity CTF", rank: "6th Place", year: "2023" },
        { title: "ISITE National Programming", rank: "8th Place Finalist", year: "2023" },
        { title: "Programmer of the Year", rank: "Awardee", year: "2024" }
    ];

    return (
        <div className="bg-white dark:bg-card-dark p-8 sm:p-4 rounded-2xl border border-border-light dark:border-border-dark shadow-sm transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                {/* Profile Image */}
                <div className="w-32 h-32 bg-gray-100 dark:bg-zinc-800 rounded-xl overflow-hidden shrink-0 border border-border-light dark:border-border-dark">
                    <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-4">
                    <div>
                        <div className="flex items-center justify-between w-full mb-1">
                            {/* Name Container - flex-1 pushes everything else to the right */}
                            <div className="flex-1">
                                <h1 className="text-3xl font-black tracking-tight text-black dark:text-white">
                                    Lloyd Ramirez <span className="px-3 text-orange-600 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="inline-block mb-1"
                                        >
                                            <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                                            <line x1="2" x2="22" y1="20" y2="20" />
                                        </svg>
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <p className="text-gray-500 dark:text-zinc-400 text-sm flex items-center gap-1.5 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            Calapan City, Philippines
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-zinc-300">
                        <span>Full Stack Web Developer</span> <span className="text-gray-300 dark:text-zinc-700">\</span>
                        <span>Automation Specialist</span> <span className="text-gray-300 dark:text-zinc-700">\</span>
                        <span>IOT Developer</span>
                    </div>

                    {/* Functional Dropdown Badge */}
                    <div className="relative inline-block text-left">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white text-[11px] font-bold rounded-md overflow-hidden transition-all active:scale-95 cursor-pointer z-30 relative"
                        >
                            <span className="px-3 py-1.5 border-r border-orange-500/50 uppercase tracking-wider">
                                🏆 {awards[0].title}
                            </span>
                            <span className={`px-2 py-1.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </span>
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                                <div className="absolute left-0 mt-2 w-64 origin-top-left bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
                                    <div className="p-2 space-y-1">
                                        <div className="px-3 py-2 text-[10px] font-black text-gray-400 dark:text-zinc-600 uppercase tracking-[0.2em]">
                                            Major Accolades
                                        </div>
                                        {awards.map((award, index) => (
                                            <div key={index} className="flex justify-between items-center px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                                                <span className="text-[11px] font-bold text-gray-700 dark:text-zinc-300">{award.title}</span>
                                                <span className="text-[9px] font-mono text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded">{award.rank}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />
        </div>
    );
};