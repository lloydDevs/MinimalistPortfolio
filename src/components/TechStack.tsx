const StackGroup = ({
    label,
    items,
    variant
}: {
    label: string,
    items: string[],
    variant: 'orange' | 'zinc' | 'dark' | 'cyan' | 'indigo'
}) => {
    const styleMap = {
        orange: 'bg-orange-50/50 dark:bg-orange-900/10 text-orange-700 dark:text-orange-400 border-orange-100/50 dark:border-orange-800/20',
        dark: 'bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 border-transparent',
        zinc: 'bg-gray-50 dark:bg-zinc-800/50 text-gray-700 dark:text-zinc-300 border-gray-100 dark:border-zinc-700/50',
        cyan: 'bg-cyan-50/50 dark:bg-cyan-900/10 text-cyan-700 dark:text-cyan-400 border-cyan-100/50 dark:border-cyan-800/20',
        indigo: 'bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-700 dark:text-indigo-400 border-indigo-100/50 dark:border-indigo-800/20'
    };

    return (
        <div className="space-y-2">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest ml-1">{label}</p>
            <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                    <span
                        key={item}
                        className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-colors ${styleMap[variant]}`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export const TechStack = () => (
    <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm space-y-5">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Tech Stack</h3>

        <StackGroup label="Frontend" items={["React", "TypeScript", "Tailwind", "Bootstrap", "Vue"]} variant="orange" />
        <StackGroup label="Backend" items={["Python", "PHP Laravel", "C#", "Java"]} variant="indigo" />
        <StackGroup label="Database" items={["SQL", "MongoDB", "Firebase"]} variant="dark" />
        <StackGroup
            label="Tools"
            items={["Git", "GitHub", "Selenium", "Postman", "VS Code", "PyCharm", "Figma"]}
            variant="cyan"
        />
    </div>
);