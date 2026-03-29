import React from 'react';

// Added subValue to the props destructuring and the Type definition
const ContactMethod = ({
    label,
    value,
    href,
    icon,
    subValue
}: {
    label: string,
    value: string,
    href: string,
    icon: React.ReactNode,
    subValue?: string // Optional property
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-zinc-800/50 hover:border-orange-500 transition-all duration-300 bg-white dark:bg-zinc-900/50"
    >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-800 group-hover:bg-orange-500/10 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                    {label}
                </p>
                <p className="text-sm font-bold text-black dark:text-white">
                    {value}
                </p>
                {/* Render subValue if it exists */}
                {subValue && (
                    <p className="text-[10px] font-medium text-gray-400 dark:text-zinc-500 mt-0.5">
                        {subValue}
                    </p>
                )}
            </div>
        </div>
        <div className="text-gray-300 dark:text-zinc-700 group-hover:text-orange-500 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 7h10v10M7 17L17 7" />
            </svg>
        </div>
    </a>
);

export const Contact = () => {
    return (
        <section className="mt-2 mb-2 max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-5 border-b border-gray-100 dark:border-zinc-900 pb-4">
                <div className="space-y-1">
                    <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-black dark:text-white">
                        Contact me
                    </h3>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-orange-600/5 border border-orange-600/10 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-600"></span>
                    </span>
                    <span className="text-[7px] font-black uppercase tracking-widest text-orange-600">
                        Available for Projects
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                <ContactMethod
                    label="Direct"
                    value="Email Me"
                    href="mailto:lloyd11ramirez@gmail.com"
                    subValue="lloyd11ramirez@gmail.com"
                    icon={<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>}
                />
                <ContactMethod
                    label="Professional"
                    value="LinkedIn"
                    href="https://linkedin.com/in/lloyd-ramirez"
                    subValue="Lloyd Ramirez"
                    icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                />
                <ContactMethod
                    label="Development"
                    value="GitHub"
                    href="https://github.com/lloydDevs"
                    subValue="View Source"
                    icon={<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                />
                <ContactMethod
                    label="Location"
                    value="Victoria"
                    href="#"
                    subValue="Mindoro, PH"
                    icon={<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
                />
            </div>
        </section>
    );
};