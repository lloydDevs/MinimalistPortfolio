import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const AssistiveTouch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isIdle, setIsIdle] = useState(true);

    // Auto-dim effect: after 3 seconds of no interaction, it fades to 40%
    useEffect(() => {
        if (isOpen) {
            setIsIdle(false);
            return;
        }
        const timer = setTimeout(() => setIsIdle(true), 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div className="fixed bottom-10 right-6 z-10 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/20 dark:border-zinc-800 shadow-2xl rounded-[2rem] flex items-center justify-center min-w-[120px]"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-zinc-500">Theme</span>
                            <ThemeToggle />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setIsIdle(false);
                }}
                className={`
          relative w-14 h-14 rounded-2xl flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${isOpen ? 'bg-zinc-800 dark:bg-white scale-90' : 'bg-black/80 dark:bg-white/20'}
          ${isIdle && !isOpen ? 'opacity-40' : 'opacity-100'}
          backdrop-blur-md border-[3px] border-white/10 dark:border-white/5
          shadow-xl active:scale-95
        `}
            >
                <div className="w-10 h-10 rounded-full border-[2px] border-white/20 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-white/40 shadow-inner" />
                </div>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default AssistiveTouch;