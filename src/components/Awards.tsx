
export const Awards = () => {
    const accolades = [
        { name: "MIMAROPA Chapter Hackathon", result: "Champion", year: "2024" },
        { name: "DICT Programming 2024", result: "Champion", year: "2024" },
        { name: "STIRDC Ideathon 2024", result: "Champion", year: "2024" },
        { name: "Hack4Gov3 Cybersecurity CTF", result: "5th Place", year: "2024" },
        { name: "ISITE National Programming", result: "Finalist", year: "2023" }
    ];

    return (
        <section className="py-12 border-t border-border-light dark:border-border-dark mt-12">
            <div className="flex items-center justify-between mb-10 px-2">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 dark:text-zinc-500 font-bold">
                    Proof of Work
                </h2>
                <span className="text-[10px] font-mono text-gray-300 dark:text-zinc-700">
                    SELECTED RECOGNITION
                </span>
            </div>

            <div className="space-y-1">
                {accolades.map((item, i) => (
                    <div
                        key={i}
                        className="group flex flex-col md:flex-row md:justify-between md:items-center py-5 px-4 rounded-xl hover:bg-white dark:hover:bg-card-dark hover:shadow-sm border border-transparent hover:border-border-light dark:hover:border-border-dark transition-all duration-300 cursor-default"
                    >
                        <div className="flex flex-col mb-1 md:mb-0">
                            <span className="text-lg font-bold text-gray-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors tracking-tight">
                                {item.name}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-600 uppercase tracking-widest">
                                {item.year}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-md border border-orange-100 dark:border-orange-800/30 group-hover:scale-105 transition-transform">
                                {item.result}
                            </span>
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-gray-300 dark:text-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Programmer of the Year Callout */}
            <div className="mt-8 p-6 bg-orange-50/50 dark:bg-orange-900/10 rounded-2xl border border-orange-100/50 dark:border-orange-800/20 flex items-center gap-4">
                <div className="h-10 w-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                </div>
                <div>
                    <h4 className="text-sm font-black text-orange-900 dark:text-orange-300 uppercase tracking-tight">Programmer of the Year</h4>
                    <p className="text-xs text-orange-800/70 dark:text-orange-400/70 font-medium">Awarded for overall excellence in programming and technical leadership.</p>
                </div>
            </div>
        </section>
    );
};