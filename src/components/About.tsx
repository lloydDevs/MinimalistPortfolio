
export const About = () => {
    return (
        <section className="max-w-3xl space-y-6">
            {/* Minimalist Header */}
            <div className="flex items-center gap-3 px-1">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white">
                    Bio / Nature of Work
                </h2>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800" />
            </div>

            <div className="space-y-4 text-[13px] md:text-sm leading-snug font-medium text-gray-500 dark:text-zinc-400">
                <p>
                    I am a <span className="text-black dark:text-white">Full-Stack Web Developer & Industrial Programmer</span> with a degree in <span className="text-black dark:text-white">BSIT (1.55 GWA)</span> from Mindoro State University. My work bridges the gap between digital software and physical hardware.
                </p>

                {/* The "Nature of Work" Grid - High Density */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-2 border-t border-gray-50 dark:border-zinc-900">
                    <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-500">Core Engineering</p>
                        <p className="text-black dark:text-zinc-200">
                            Currently in <span className="font-bold">Industrial Automation</span> and <span className="font-bold">IoT</span> systems, developing custom hardware-software solutions like the CtRH singeing technology.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-500">Vision & Web</p>
                        <p className="text-black dark:text-zinc-200">
                            <p>Specialized in scalable <span className="font-bold">Web Applications</span> (Laravel, Vue).
                            </p>
                            Knowledgeable in <span className="font-bold">Image Processing</span>. </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Technical Support</p>
                        <p className="text-gray-500 dark:text-zinc-400 italic">
                            Knowledgeable in <span className="font-bold text-zinc-600 dark:text-zinc-300">Computer Troubleshooting</span> and comprehensive <span className="font-bold text-zinc-600 dark:text-zinc-300">Printer Maintenance</span>/repair.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Honors</p>
                        <p className="text-gray-500 dark:text-zinc-400">
                            Recognized as <span className="text-black dark:text-white font-bold underline decoration-orange-500/30 ">Programmer of the Year</span> for outstanding technical execution during College days. Awarded as <span className="text-black dark:text-white font-bold underline decoration-orange-500/30 ">President's Lister</span> and <span className="text-black dark:text-white font-bold underline decoration-orange-500/30 ">Dean's Lister</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};