import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // loads all features

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // Initialize the engine once
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: true, zIndex: -1 }, // Places it behind everything
                particles: {
                    number: { value: 80, density: { enable: true } },
                    color: { value: "#3b82f6" }, // Match your blue-600 theme
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#3b82f6",
                        opacity: 0.2,
                        width: 1,
                    },
                    move: { enable: true, speed: 1 },
                    size: { value: { min: 1, max: 3 } },
                    opacity: { value: 0.3 },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                },
            }}
        />
    );
};