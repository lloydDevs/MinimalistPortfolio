import React from 'react';

export const Competitions = () => {
    const data = [
        { name: "MIMAROPA Chapter Hackathon", rank: "Champion", year: "24" },
        { name: "DICT Programming 2024", rank: "Champion", year: "24" },
        { name: "STIRDC Ideathon 2024", rank: "Champion", year: "24" },
        { name: "Hack4Gov3 Cybersecurity CTF", rank: "5th Place", year: "24" },
        { name: "ISITE National Programming", rank: "Finalist", year: "23" }
    ];

    return (
        <section className="mt-8">
            <div className="flex items-center gap-3 mb-6 px-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white">
                    Major Competitions
                </h3>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800" />
            </div>

            <div className="space-y-0.5">
                {data.map((comp, i) => {
                    const isChampion = comp.rank.toLowerCase() === 'champion';

                    return (
                        <div
                            key={i}
                            className="group flex items-center justify-between py-2.5 px-3 hover:bg-gray-50 dark:hover:bg-zinc-900/40 rounded-lg transition-all duration-200"
                        >
                            <div className="flex items-center gap-4">
                                {/* Minimal Year Label */}
                                <span className="text-[10px] font-mono text-gray-300 dark:text-zinc-700 w-4">
                                    {comp.year}
                                </span>

                                {/* Title */}
                                <h4 className={`text-sm font-bold transition-colors ${isChampion ? 'text-gray-900 dark:text-zinc-100' : 'text-gray-500 dark:text-zinc-400'
                                    }`}>
                                    {comp.name}
                                </h4>
                            </div>

                            {/* Minimal Rank Indicator */}
                            <div className="flex items-center gap-3">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${isChampion ? 'text-orange-600 dark:text-orange-500' : 'text-gray-400 dark:text-zinc-600'
                                    }`}>
                                    {comp.rank}
                                </span>
                                {/* Tiny Status Dot */}
                                <div className={`w-1 h-1 rounded-full ${isChampion ? 'bg-orange-600 animate-pulse' : 'bg-gray-200 dark:bg-zinc-800'
                                    }`} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};