
import { Experience } from './Experience';
import { TechStack } from './TechStack';
import { Certifications } from './Certifications';

export const Sidebar = () => {
    return (
        <aside className="space-y-6 lg:sticky lg:top-8">
            <Experience />
            <TechStack />
            <Certifications />
        </aside>
    );
};