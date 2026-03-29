export const StatusBoard = () => (
    <div className="bg-white dark:bg-zinc-900/50 p-3 rounded-2xl border border-gray-100 dark:border-zinc-800/50 shadow-sm">
        <h3 className="text-[10px] font-black mb-6 text-gray-400 uppercase tracking-[0.2em]">Current Status</h3>

        <div className="space-y-5">
            {/* Learning Item */}
            <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-600 bg-primary shadow-[0_0_15px_rgba(255,125,0,0.3)]" />
                <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Currently Learning</p>
                    <p className="text-sm font-bold text-black dark:text-white">Python Image Processing</p>
                </div>
            </div>

            {/* Working On Item */}
            <div className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Project</p>
                    <p className="text-sm font-bold text-black dark:text-white">Banana Leaf Singeing Machine Technology</p>
                </div>
            </div>

            {/* Availability */}
            <div className="pt-4 border-t border-gray-50 dark:border-zinc-800">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-gray-400">LOC: VICTORIA, OR. MINDORO</span>
                    <span className="text-[10px] font-mono text-primary font-bold">UTC +8</span>
                </div>
            </div>
        </div>
    </div>
);