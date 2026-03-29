import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectItem = ({ title, tag, desc }: { title: string, tag: string, desc: string }) => (
    <div className="group py-6 border-b border-gray-100 dark:border-zinc-800/50 last:border-0 md:last:border-b hover:bg-gray-50/30 dark:hover:bg-zinc-900/20 px-2 transition-all rounded-lg">
        <div className="flex flex-col gap-2">
            <div className="space-y-1">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-600 dark:text-orange-500">
                    {tag}
                </span>
                <h4 className="text-base font-black text-black dark:text-white uppercase tracking-tight group-hover:text-orange-600 transition-colors">
                    {title}
                </h4>
            </div>

            <p className="text-[12px] leading-relaxed text-gray-500 dark:text-zinc-400 font-medium max-w-sm">
                {desc}
            </p>
        </div>
    </div>
);

export const Projects = () => {
    const navigate = useNavigate();

    const works = [
        {
            tag: "Maritime Logistics",
            title: "SmartPort",
            desc: "Regional Champion maritime platform integrating real-time telemetry and automated billing."
        },
        {
            tag: "Industrial Tech",
            title: "Singeing Tech",
            desc: "PLC-driven automation for banana leaf FCM production using sustainable biomass energy."
        },
        {
            tag: "Agri-Commerce",
            title: "CocoMart",
            desc: "Digital supply chain bridge connecting Mindoro coconut farmers directly to revenue streams."
        },
        {
            tag: "Computer Vision",
            title: "Palay Classifier",
            desc: "AI grain quality grading system using OpenCV to eliminate manual inspection bias."
        },
        {
            tag: "Procurement",
            title: "Management System",
            desc: "Full-stack PR/PO automation engine with dynamic PDF export pipeline for MSMEs."
        },
        {
            tag: "UX Redesign",
            title: "Alivee Redesign",
            desc: "High-conversion SaaS redesign focusing on responsive architecture and lead generation."
        }
    ];

    return (
        <section className="mt-8">
            <div className="flex items-center gap-4 mb-4 px-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
                    Selected Works
                </h3>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800" />
                <span className="text-[10px] font-mono text-gray-300 dark:text-zinc-700">06 / INDEX</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 mb-6">
                {works.map((work, i) => (
                    <ProjectItem key={i} {...work} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/projects')}
                    className="group relative flex items-center justify-center gap-3 px-8 py-2.5 rounded-full 
               bg-orange-600 hover:bg-orange-500
               border border-orange-400/50 dark:border-orange-500/50
               transition-all duration-300 scale-100 active:scale-95
               shadow-[0_0_10px_rgba(234,88,12,0.3)]
               hover:shadow-[0_0_25px_rgba(234,88,12,0.6)]
               overflow-hidden"
                >
                    {/* 1. ANIMATED GLOW OVERLAY (Continuous Pulse) */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md animate-pulse group-hover:animate-none opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

                    {/* 2. HOVER SHINE EFFECT */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                    {/* BUTTON CONTENT */}
                    <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white">
                        View All Projects
                    </span>

                    {/* 3. ARROW ICON container with Hover Animation */}
                    <div className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white transition-colors duration-300">
                        <svg
                            className="text-white group-hover:text-orange-600 transition-all duration-300 transform group-hover:translate-x-0.5"
                            width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};