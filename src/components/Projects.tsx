import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProjectItem = ({ title, tag, desc, url }: { title: string, tag: string, desc: string, url: string }) => (
    <div className="group py-6 border-b border-gray-100 dark:border-zinc-800/50 last:border-0 md:last:border-b hover:bg-gray-50/30 dark:hover:bg-zinc-900/20 px-2 transition-all rounded-lg">
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                        {tag}
                    </span>
                    <h4 className="text-base font-black text-black dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                </div>
                <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-zinc-700 hover:text-black dark:hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 7h10v10M7 17L17 7" /></svg>
                </a>
            </div>

            <p className="text-[12px] leading-relaxed text-gray-500 dark:text-zinc-400 font-medium max-w-sm">
                {desc}
            </p>

            <span className="text-[10px] font-mono text-gray-300 dark:text-zinc-600 tracking-tighter">
                LINK // {url}
            </span>
        </div>
    </div>
);

export const Projects = () => {
    const navigate = useNavigate();
    const works = [
        {
            tag: "Industrial Automation",
            title: "Singeing Tech",
            desc: "Engineered an automated Banana Leaf Singeing Machine using CtRH heat exchanger technology.",
            url: "minsu.edu.ph"
        },
        {
            tag: "E-Commerce",
            title: "CocoMart",
            desc: "Full-stack marketplace connecting Mindoro coconut farmers directly to revenue streams.",
            url: "cocomart.dev"
        },
        {
            tag: "Systems Automation",
            title: "CHED System",
            desc: "Administrative automation converting Purchase Requests to Orders for CHED MIMAROPA.",
            url: "ched.gov.ph"
        },
        {
            tag: "Cybersecurity / CTF",
            title: "Hack4Gov Shield",
            desc: "Developed penetration testing scripts and security protocols for the Hack4Gov National CTF finals.",
            url: "github.com/your-repo"
        },
        {
            tag: "IoT & Electronics",
            title: "Smart Monitor",
            desc: "IoT-based environmental monitoring system using ESP32 for agricultural real-time data tracking.",
            url: "iot-agro.io"
        },
        {
            tag: "Vision / Image Proc.",
            title: "OptiScan AI",
            desc: "Computer vision tool for quality grading of agricultural products using Python and OpenCV.",
            url: "vision.dev"
        }
    ];

    return (
        <section className="mt-8">
            <div className="flex items-center gap-4 mb-4 px-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
                    Selected Works
                </h3>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800" />
                <span className="text-[10px] font-mono text-gray-300 dark:text-zinc-700">03 / INDEX</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 mb-6">
                {works.map((work, i) => (
                    <ProjectItem key={i} {...work} />
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/projects')}
                    className="group flex items-center gap-3 px-5 py-2 rounded-full 
                   bg-orange-600 dark:bg-orange-600 hover:bg-orange-500
                   border border-orange-400/30
                   transition-all duration-300 scale-100 active:scale-95
                   shadow-md hover:shadow-[0_0_15px_rgba(234,88,12,0.4)]"
                >
                    {/* Smaller font and tighter tracking */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        View All Projects
                    </span>

                    {/* Smaller icon container */}
                    <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white flex items-center justify-center transition-all duration-300">
                        <svg
                            className="text-white group-hover:text-orange-600 transition-colors"
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