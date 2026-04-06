import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center p-4 md:p-8 font-mono">
            {/* max-w-md is the upper limit, but w-full lets it shrink on mobile */}
            <div className="max-w-md w-full border border-red-500/20 bg-red-500/5 p-6 md:p-8 rounded-sm relative overflow-hidden">

                {/* Decorative Background "Glitch" - Adjusted size for mobile */}
                <div className="absolute top-0 right-0 p-2 opacity-10 select-none text-[30px] md:text-[40px] font-black">
                    404
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="h-2 w-2 md:h-3 md:w-3 bg-red-500 rounded-full animate-pulse shrink-0" />
                    <h1 className="text-[10px] md:text-sm font-black text-red-600 dark:text-red-400 uppercase tracking-[0.1em] md:tracking-[0.2em]">
                        System_Error: 404
                    </h1>
                </div>

                <div className="space-y-4">
                    {/* Added text-xl for mobile and break-words for safety */}
                    <h2 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase tracking-tighter break-words leading-tight">
                        Target_Path_Not_Found
                    </h2>

                    {/* break-words ensures the text wraps on small screens */}
                    <p className="text-[10px] md:text-[11px] leading-relaxed text-gray-500 dark:text-zinc-500 uppercase tracking-wide break-words">
                        The requested record or directory does not exist in the current archive.
                        The link may be broken, or the documentation has been decommissioned.
                    </p>

                    <div className="pt-6">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors w-full sm:w-auto justify-center"
                        >
                            ← Re-Initialize System
                        </Link>
                    </div>
                </div>

                {/* Footer trace line - adjusted text size and wrapping */}
                <div className="mt-8 pt-4 border-t border-red-500/10 text-[7px] md:text-[8px] text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] flex flex-wrap gap-2">
                    <span>Trace_ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                    <span className="opacity-50">// NODE_MIMAROPA</span>
                </div>
            </div>
        </main>
    );
};