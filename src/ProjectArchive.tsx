import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Machine from './assets/singeingmachine.png';
import Capstone01 from './assets/capstone01.jpg';
import Capstone02 from './assets/capstone02.jpg';
import Capstone03 from './assets/capstone03.jpg';
import Capstone04 from './assets/capstone04.jpg';
import Palay01 from './assets/palay01.png';
import Palay02 from './assets/palay02.png';
import Palay03 from './assets/palay03.jpg';
import Palay04 from './assets/palay04.png';
import prpo01 from './assets/prpo01.png';
import prpo02 from './assets/prpo02.png';
import prpo03 from './assets/prpo03.png';
import prpo04 from './assets/prpo04.png';
import Cradle01 from './assets/cradle01.jpeg';
import Cradle02 from './assets/cradle02.jpeg';
import Cradle03 from './assets/cradle03.png';
import SmartPort01 from './assets/SP1.mp4';
import SmartPort02 from './assets/SP2.png';
import SmartPort03 from './assets/SP3.png';
import SmartPort04 from './assets/SP4.png';
import Pos1 from './assets/POSM1.jpg';
import Pos2 from './assets/POSM2.png';
import Pos3 from './assets/POSM3.jpg';
import Pos4 from './assets/POSM4.png';
import Quiz1 from './assets/QUIZ1.png';
import Quiz2 from './assets/QUIZ2.png';
import Quiz3 from './assets/QUIZ3.png';
import Quiz4 from './assets/QUIZ4.png';
import Organizer1 from './assets/Organizer1.png';
import Organizer2 from './assets/Organizer2.png';
import Organizer3 from './assets/Organizer3.png';
import Organizer4 from './assets/Organizer4.png';
import Web1 from './assets/WEB1.png';
import Web2 from './assets/WEB2.png';
import Web3 from './assets/WEB3.png';
import Web4 from './assets/WEB4.png';

import { ParticleBackground } from './components/ParticleBackground';
import { ThemeToggle } from './components/ThemeToggle';
import AssistiveTouch from './components/AssistiveTouch';
import { fromJSON } from 'postcss';

const ProjectDetailCard = ({ project, index, onImageClick }: { project: any, index: number, onImageClick: (src: string) => void }) => {
    const allImages = [project.screenshot, ...(project.gallery || [])].slice(0, 4);

    return (
        <div className="group border-t border-gray-100 dark:border-zinc-900 py-12 md:py-20 first:border-t-0">
            {/* Header section remains the same... */}
            <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-blue-600 font-bold shrink-0">
                            [{String(index + 1).padStart(2, '0')}]
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase tracking-tighter leading-tight">
                            {project.title}
                        </h2>
                    </div>
                    {/* CHAMPION BADGE BESIDE TITLE */}
                    {project.badge && (
                        <div className="flex items-center gap-2 bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/50 px-3 py-1 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14" height="14"
                                viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="text-orange-500"
                            >
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                            </svg>
                            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400">
                                {project.badge}
                            </span>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-[9px] md:text-[10px] font-mono text-gray-400 border border-gray-100 dark:border-zinc-800 px-2 py-1 uppercase tracking-widest">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-[11px] md:text-[12px] leading-relaxed text-gray-500 dark:text-zinc-500 max-w-3xl whitespace-pre-line">
                    {project.fullDesc}
                </p>
            </div>

            {/* Image Row with Champion Badge Overlay */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {allImages.map((src: string, i: number) => {
                    const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

                    return (
                        <div
                            key={i}
                            className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-zinc-900/50 rounded-sm cursor-zoom-in md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                            onClick={() => onImageClick(src)}
                        >

                            {isVideo ? (
                                <video src={src} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 md:opacity-80 hover:opacity-100 transition-all duration-500" />
                            ) : (
                                <img src={src} alt={`${project.title} asset ${i}`} className="w-full h-full object-cover opacity-90 md:opacity-80 hover:opacity-100 md:hover:scale-110 transition-all duration-500" />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Footer data line remains the same... */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2 text-[8px] font-mono text-gray-300 dark:text-zinc-800 uppercase tracking-[0.4em]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="truncate max-w-[200px] sm:max-w-none">
                        FILE_ID: {project.title.replace(/\s+/g, '_').toUpperCase()}
                    </span>
                </div>
                <span className="hidden sm:block">STATUS: ARCHIVED_RECORDS</span>
            </div>
        </div>
    );
};
export const ProjectArchive = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const allProjects = [
        {
            title: "Singeing Tech",
            tag: "Industrial Automation",
            fullDesc: `SYSTEM OVERVIEW:
                    An industrial-grade automation solution developed for FM Bolus Corporation to modernize the production of banana leaf Food Contact Materials (FCM). This project replaces manual processes with a custom-engineered singeing system that utilizes sustainable biomass fuel.

                    ENGINEERING ACHIEVEMENTS:
                    01. Industrial Plant Integration: Successfully designed and commissioned full-scale banana leaf singeing equipment within an active MSME production environment.
                    02. Thermodynamic Optimization: Engineered a precise control system to manage singeing temperatures and exposure times, ensuring consistent material quality.
                    03. Sustainable Energy Integration: Developed a biomass combustion system that utilizes rice hulls as a primary fuel source, significantly reducing operational costs.
                    04. Economic & Operational Viability: Validated the system's performance through rigorous testing, proving it as a cost-efficient and reliable alternative to traditional heating methods.`,
            tech: ["PLC", "Ladder Logic", "VFD", "Sensors"],
            screenshot: Machine,
            gallery: [Cradle01, Cradle02, Cradle03],
            url: "#"
        },
        {
            title: "CocoMart",
            tag: "E-Commerce",
            fullDesc: `SYSTEM OVERVIEW:
                    CocoMart is a specialized e-commerce and supply chain platform designed to empower coconut farmers in Mindoro. It serves as a digital bridge, connecting local producers directly to consumers while automating the complex logistics of the agricultural trade.

                    KEY FUNCTIONALITIES:
                    01. Direct-to-Consumer Marketplace: Features a dedicated advertising and promotion module to showcase local coconut products to a global market.
                    02. Secure E-Commerce Engine: A robust platform built with a focus on data privacy for both farmers and shop owners, ensuring safe digital storefronts.
                    03. Fair Trade Architecture: Facilitates direct sales models that eliminate middleman costs, ensuring fair pricing and higher revenue for the farmers.
                    04. Hybrid Payment Integration: Supports flexible transactions via cash and QR-code-based online payments for a seamless user experience.
                    05. Inventory & Sales Analytics: Includes automated reporting tools that provide real-time visibility into sales status and stock management.
                    06. Logistics & Supply Chain Tracking: A monitoring system designed to oversee day-to-day transactions and track the movement of products from farm to table.`,
            tech: ["Laravel", "MySQL", "REST API"],
            screenshot: Capstone01,
            gallery: [Capstone02, Capstone03, Capstone04],
            url: "#"
        },
        {
            title: "Palay Classifier",
            tag: "Image Processing",
            fullDesc: `SYSTEM OVERVIEW:
                    An end-to-end agricultural automation solution designed to modernize the palay trading process. The system replaces manual inspection with high-precision computer vision and integrated hardware to ensure fairness and transparency for both farmers and traders.

                    KEY FUNCTIONALITIES:
                    01. Computer Vision Classification: Uses custom image processing algorithms to analyze grain size, shape, texture, and color patterns for instant quality grading.
                    02. Automated Valuation: Seamlessly integrates real-time weighing scales with the classification module to calculate market value based on current pricing standards.
                    03. Digital Ledger & Receipting: Automatically generates detailed transaction records, including weight, grade, and total cost, minimizing manual entry errors.
                    04. Workflow Optimization: Reduces the time-per-transaction and eliminates human bias in grain quality assessment through a unified software-hardware interface.`,
            tech: ["Python", "Machine Learning", "OpenCV"],
            screenshot: Palay01,
            gallery: [Palay02, Palay03, Palay04],
            url: "#"
        },
        {
            title: "Procurement Management System",
            github: "https://github.com/lloydDevs/process_converter_system.git",
            tag: "Web Application",
            fullDesc: `SYSTEM OVERVIEW:
                    An automated procurement management tool designed to streamline the lifecycle of Purchase Requests (PR) and Purchase Orders (PO). The system digitizes the documentation process, ensuring accurate data tracking and professional PDF report generation for MSME operations.

                    KEY FUNCTIONALITIES:
                    01. Intelligent Document Numbering: Features an automated generation logic for PR/PO numbers using a [YYYY-MM-COUNT] timestamp format, ensuring chronological data integrity.
                    02. Dynamic Form Engine: Implements a reactive UI for adding/removing line items on-the-fly, with intelligent row management and real-time validation.
                    03. Digital Archive & Retrieval: A centralized "Saved Entries" vault for managing generated documents, allowing users to re-download, view, or update procurement data.
                    04. PDF Export Pipeline: Integrated server-side or client-side logic to convert procurement forms into standardized, print-ready PDF layouts for both PR and PO records.
                    05. Lifecycle Tracking: Provides a clear visual status of which Purchase Requests have associated Purchase Orders, preventing duplicate entries or missing documentation.

                    CURRENT SCOPE & TECH:
                    Built with a focus on front-end state management and local authentication. Currently supports secure PDF exports and real-time count tracking, with IAR (Inspection and Acceptance Report) integration scheduled for future deployment.`,
            tech: ["Mysql", "React", "Express js", "Node js", "API"],
            screenshot: prpo01,
            gallery: [prpo02, prpo03, prpo04],
            url: "#"
        },
        {
            title: "SMARTPORT",
            github: "",
            tag: "Web Application",
            badge: "STIRDC Regional Champion",
            fullDesc: `SYSTEM OVERVIEW:
            A comprehensive maritime logistics and port authority management platform designed to digitize the traditional shipping lifecycle. SmartPort acts as a unified digital twin for port operations, integrating financial transactions, scheduling, and live asset tracking into a single low-latency interface.

            KEY FUNCTIONALITIES:
            01. Unified Billing & Fintech Integration: Features a secure online billing pipeline that automates invoice generation and real-time payment reconciliation, reducing administrative overhead and financial discrepancies.
            02. Real-Time Operational Telemetry: Implements a live status update engine that tracks vessel movements and container staging, providing stakeholders with millisecond-accurate data on cargo progress.
            03. Dynamic Berthing & Scheduling: A high-precision scheduling system that optimizes dock utilization and reduces vessel wait times through automated time-slot allocation and conflict resolution.
            04. Streamlined Port Orchestration: Centralizes multi-departmental workflows—from customs clearance to terminal operations—into a cohesive management dashboard to eliminate operational bottlenecks.

            CORE VALUE:
            "Seamlessly navigating the shipping journey: From initial booking to final destination tracking, SmartPort provides a transparent, end-to-end digital corridor for global trade."`,
            tech: ["Laravel", "MySQL", "Weather API"],
            screenshot: SmartPort01,
            gallery: [SmartPort02, SmartPort03, SmartPort04],
            url: "#"
        },
        {
            title: "POS System",
            github: "",
            tag: "Web Application",
            fullDesc: `SYSTEM OVERVIEW:
            A high-performance retail management engine designed to bridge the gap between physical storefront transactions and digital inventory intelligence. This POS system centralizes sales, stock auditing, and financial reporting into a single, low-latency interface optimized for rapid-fire retail environments.

            KEY FUNCTIONALITIES:
            01. Real-Time Inventory Synchronization: Implements an automated stock-level monitoring system that triggers instant updates across the database upon every transaction, preventing overselling and stock-outs.
            02. Multi-Modal Transaction Processing: Features a streamlined checkout pipeline supporting various payment gateways, discount logic application, and automated tax calculations for high-volume service.
            03. Advanced Sales Analytics & Reporting: Generates granular data visualizations of daily revenue, top-performing product categories, and peak transaction hours to drive data-informed business decisions.
            04. Secure User Access Control: Built with role-based authentication (RBAC) to ensure that sensitive financial data and inventory adjustments are restricted to authorized personnel only.

            CORE VALUE:
            "Engineered for accuracy: Transforming raw transaction data into actionable business growth through a robust, scalable architecture."`,
            tech: ["Laravel", "MySQL", "Weather API"],
            screenshot: Pos1,
            gallery: [Pos2, Pos3, Pos4],
            url: "#"
        },
        {
            title: "QUIZ App",
            github: "",
            tag: "Web Application",
            fullDesc: `SYSTEM OVERVIEW:
            A dynamic, real-time quiz application engineered to deliver high-concurrency trivia challenges. The system leverages external REST APIs to fetch diverse question sets, processed through a custom state-management engine that handles rapid-fire user input, synchronized timers, and competitive scoring logic.

            KEY FUNCTIONALITIES:
            01. RESTful API Orchestration: Seamlessly integrates with global trivia databases to pull randomly selected questions across multiple categories and difficulty tiers, ensuring a fresh user experience in every session.
            02. Precision Game Mechanics: Implements a 20-second "Blitz" timer with millisecond-accurate state updates. The logic calculates final performance scores based on correct responses and speed-to-completion.
            03. Persistent Competitive Leaderboards: Features a global ranking module that archives top scores, allowing users to benchmark their trivia performance against a community of active participants.
            04. Personalized User Archetypes: A dedicated Profile system that tracks individual progress, featuring a modern UI with custom avatars and biographical metadata, built with a focus on user engagement.

            TECHNICAL SCOPE:
            Built with a focus on low-latency state transitions and responsive dark-mode aesthetics. The system is designed to handle rapid re-renders during high-speed play sessions without compromising performance or UI fluidity.`,
            tech: ["HTML", "CSS", "JavaScript", "API"],
            screenshot: Quiz1,
            gallery: [Quiz2, Quiz3, Quiz4],
            url: "#"
        },
        {
            title: "FILE ORGRANIZER USING PYTHON",
            github: "",
            tag: "Console Application",
            fullDesc: `SYSTEM OVERVIEW:
            An automated file system management utility developed in Python to eliminate directory clutter. The script functions as an intelligent sorting engine that scans target directories and autonomously redistributes files into categorized subfolders based on high-granularity extension mapping.

            KEY FUNCTIONALITIES:
            01. Intelligent Extension Mapping: Utilizes a comprehensive dictionary-based classification system (FILE_TYPES) to identify and sort diverse formats, including Media, Documents, and Executables.
            02. Automated Directory Orchestration: Implements dynamic folder creation logic using the 'os' and 'pathlib' modules, ensuring that target categories exist before execution to prevent data loss.
            03. Robust File I/O Management: Features a non-destructive sorting algorithm that utilizes 'shutil' for safe file migration, effectively handling unrecognized extensions by segregating them into a fallback "Others" directory.
            04. Recursive Validation Logic: Built with safety checks to verify file integrity and prevent redundant operations, providing real-time console feedback on the status of the organization process.

            TECHNICAL SCOPE:
            Focuses on back-end automation and scripting efficiency. The tool is designed to be lightweight and scalable, capable of processing high-volume directories with minimal CPU overhead while maintaining a strictly organized hierarchical structure.`,
            tech: ["Python", "os", "pathlib", "shutil"],
            screenshot: Organizer1,
            gallery: [Organizer2, Organizer3, Organizer4],
            url: "#"
        },
        {
            title: "Website Redesign",
            github: "",
            tag: "Web Application",
            fullDesc: `SYSTEM OVERVIEW:
            A high-conversion landing page redesign and responsive architecture for Alivee, an automated social commerce platform. The project focused on transforming complex live-selling features into a streamlined, mobile-first user experience, utilizing modern CSS orchestration to ensure visual consistency across all device breakpoints.

            KEY FUNCTIONALITIES:
            01. Strategic UX/UI Overhaul: Re-engineered the information architecture to prioritize 'Feature-to-Benefit' storytelling. Implemented custom vector-based diagrams to visualize complex API integrations between AI, CRM, and Logistics modules.
            02. Precision Responsive Engineering: Developed a fluid grid system that maintains layout integrity from ultra-wide monitors to handheld devices, ensuring the "Join Now" call-to-action remains in the optimal conversion zone.
            03. Lead Generation Optimization: Built a clean, validation-ready registration interface with real-time feedback, designed to reduce user friction and increase the efficiency of the "15-Slot" scarcity-based marketing funnel.
            04. Asset Optimization & Performance: Leveraged high-fidelity mockups and optimized web assets to deliver a retina-ready visual experience without compromising page load speeds or SEO performance.

            TECHNICAL SCOPE:
            Focused on modern front-end aesthetics and high-impact marketing psychology. The redesign emphasizes clean typography, balanced whitespace, and interactive UI components that guide the user through the SaaS value proposition effortlessly.`,
            tech: ["HTML", "CSS", "JavaScript", "API"],
            screenshot: Web1,
            gallery: [Web2, Web3, Web4],
            url: "#"
        },


    ];

    return (
        <main className="relative min-h-screen bg-white dark:bg-zinc-950 max-w-6xl mx-auto px-8 py-1 selection:bg-blue-600 selection:text-white  z-10 ">
            <ParticleBackground />
            <AssistiveTouch />
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm p-8 cursor-zoom-out"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="absolute top-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">
                        Viewing Asset // ESC to exit
                    </div>
                    <img
                        src={selectedImg}
                        className="max-w-full max-h-[85vh] object-contain animate-in fade-in zoom-in-95 duration-300"
                        alt="Preview"
                    />
                </div>
            )}

            <header className="pt-1 md:pt-2 pb-2">
                <div className="flex items-center justify-between w-full mb-5">
                    {/* Left Side */}
                    <Link
                        to="/"
                        className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-blue-600 transition-colors"
                    >
                        ← Return to Index
                    </Link>
                </div>

                <div className="mt-1">
                    <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
                        Archive_
                    </h1>
                </div>
            </header>

            <div className="space-y-4">
                {allProjects.map((p, i) => (
                    <ProjectDetailCard
                        key={i}
                        index={i}
                        project={p}
                        onImageClick={(src) => setSelectedImg(src)}
                    />
                ))}
            </div>

            <footer className="py-2 text-center border-t border-gray-100 dark:border-zinc-900">
                <p className="text-[9px] font-mono text-gray-300 dark:text-zinc-800 uppercase tracking-[1em]">
                    End of Records // 2026
                </p>
            </footer>
        </main>
    );
};