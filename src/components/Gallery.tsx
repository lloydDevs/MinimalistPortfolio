import { useRef } from 'react';
import CHAMP from "../assets/CHAMP.jpg";
import CHAMP01 from "../assets/CHAMP01.jpg";
import DL01 from "../assets/DL01.jpg";
import AWARDEE from "../assets/AWARDEE.jpg";
import GRAD from "../assets/GRAD.jpg";
import GRAD01 from "../assets/GRADPIC01.jpg";
import ND2 from "../assets/2NDPL.jpg";
import RD3 from "../assets/3RD.jpg";
import TH4 from "../assets/4TH.jpg";
import CERTS from "../assets/CERTS01.jpg";
import PL01 from "../assets/PL01.jpg";
import SPEAKER from "../assets/SPEAKER.jpg";

export const Gallery = () => {
    const images = [
        { src: CHAMP, label: "MIMAROPA Hackathon Champion", category: "Win" },
        { src: AWARDEE, label: "Programmer of the Year", category: "Award" },
        { src: GRAD, label: "BSIT Graduation Day", category: "Academic" },
        { src: SPEAKER, label: "Technical Guest Speaker", category: "Leadership" },
        { src: CHAMP01, label: "DICT Programming 2024", category: "Win" },
        { src: ND2, label: "2nd Place Campus Hackathon", category: "Competition" },
        { src: RD3, label: "3rd Place Podium Finish", category: "Competition" },
        { src: TH4, label: "4th Place Mindoro-wide", category: "Competition" },
        { src: CERTS, label: "Professional Certifications", category: "Credentials" },
        { src: DL01, label: "Dean's Lister Honor", category: "Academic" },
        { src: GRAD01, label: "Academic Distinction", category: "Academic" },
        { src: PL01, label: "Project Presentation", category: "Research" },
    ];
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll Logic: Moves the container by the width of 2 images
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="mt-12 relative group/main">
            {/* Header */}
            <div className="flex justify-between items-end mb-8 px-2">
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">
                        Visual Archive
                    </h3>
                    <p className="text-[10px] font-mono text-primary font-bold mt-1 uppercase">
                        {images.length} Units // Index
                    </p>
                    <p className="text-[8px] text-gray-500 dark:text-zinc-500 mt-1">
                        Scroll left to explore more
                    </p>
                </div>
            </div>

            {/* Navigation Arrows - Visible on Hover */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/main:opacity-100 transition-all hover:bg-primary hover:border-primary shadow-xl"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/main:opacity-100 transition-all hover:bg-primary hover:border-primary shadow-xl"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            {/* The Slider Container */}
            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 scroll-smooth"
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="group relative flex-none w-[calc(50%-12px)] md:w-[calc(20%-12px)] aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800/50 hover:border-primary/50 transition-all duration-500 snap-start"
                    >
                        <img
                            src={img.src}
                            alt={img.label}
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <span className="text-[8px] font-black text-primary uppercase tracking-widest mb-1">{img.category}</span>
                            <p className="text-[10px] font-bold text-white leading-tight">{img.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};