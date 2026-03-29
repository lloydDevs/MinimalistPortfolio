import React from 'react';
import { Experience } from './Experience';
import { TechStack } from './TechStack';
import { Certifications } from './Certifications'; // Assuming this is in its own file now

export const Sidebar = () => {
    return (
        <aside className="space-y-6 lg:sticky lg:top-8">
            <Experience />
            <TechStack />
            <Certifications />
        </aside>
    );
};