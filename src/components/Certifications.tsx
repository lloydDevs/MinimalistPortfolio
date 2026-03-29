import React from 'react';

export const Certifications = () => {
    const certs = [
        {
            name: "BS in Information Technology",
            issuer: "Mindoro State University",
            id: "2025",
            icon: "🎓"
        },
        {
            name: "Java Programming NCIII",
            issuer: "TESDA BCRV",
            id: "CERT-2024-001",
            icon: "☕"
        },
        {
            name: "Computer Security Level 1",
            issuer: "TESDA BCRV",
            id: "DICT-SEC-99",
            icon: "🛡️"
        },
        {
            name: "Python Specialist",
            issuer: "CodeChum",
            id: "PY-ADV-2023",
            icon: "🐍"
        },
    ];

    return (
        <section className="mt-8">
            <div className="flex items-center gap-3 mb-6 px-1">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black dark:text-white">
                    Credentials
                </h3>
                <div className="h-[1px] flex-1 bg-gray-100 dark:bg-zinc-800" />
            </div>

            <div className="space-y-1">
                {certs.map((cert, i) => (
                    <div key={i} className="group flex items-center justify-between py-3 px-2 hover:bg-gray-50 dark:hover:bg-zinc-900/40 rounded-lg transition-all">
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                {cert.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">
                                    {cert.issuer}
                                </span>
                                <span className="text-[10px] text-gray-200 dark:text-zinc-800">•</span>
                                <span className="text-[9px] font-mono text-gray-300 dark:text-zinc-600">
                                    ID: {cert.id}
                                </span>
                            </div>
                        </div>

                        {/* Minimalist verification indicator */}
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-100 dark:border-zinc-800 group-hover:border-orange-500/30 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-all">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};