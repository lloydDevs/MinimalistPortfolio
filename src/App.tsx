
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './components/Gallery';
import { Competitions } from './components/Competetions';
import { Contact } from './components/Contacts';
import { StatusBoard } from './components/DigitalStats';
import { ProjectArchive } from './ProjectArchive';
import AssistiveTouch from './components/AssistiveTouch';

// 1. Create a "MainPage" component for your existing content
const MainPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Global Navigation Header - Tightened */}


    {/* Removed mt-12 or pt-12 from this grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Content Area */}
      <main className="lg:col-span-8 space-y-12">
        {/* Check Hero.tsx for internal mt-20 or pt-20! */}
        <Hero />
        <Projects />
        <Competitions />
      </main>

      {/* Sidebar Area */}
      <aside className="lg:col-span-4">
        {/* Match the sticky top to your nav height */}
        <div className="sticky top-16 space-y-8">
          <Sidebar />
        </div>
      </aside>
    </div>

    <div className="mt-12">

      <Gallery />

    </div>



    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 items-start">

      <Contact />

      <StatusBoard />

    </div>
  </div>
);

// 2. Your App component handles the routing
export default function App() {
  return (
    <Router>

      <div className="min-h-screen bg-bg-soft dark:bg-bg-dark text-black dark:text-white transition-colors duration-300 selection:bg-orange-500/30 z-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <AssistiveTouch />
          <Routes>
            {/* When at "/", show the MainPage */}
            <Route path="/" element={<MainPage />} />

            {/* When at "/projects", show ProjectArchive */}
            <Route path="/projects" element={<ProjectArchive />} />
          </Routes>

          {/* Professional Footer stays on BOTH pages */}
          <footer className="mt-5 py-5 border-t border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <p className="text-[10px] font-mono text-gray-400 tracking-[0.3em] uppercase mb-1">
                © 2026 Lloyd Ramirez • Calapan City • Mindoro State University
              </p>
            </div>

            <div className="flex gap-8 text-[10px] font-mono text-gray-400 tracking-widest uppercase">
              <a href="https://github.com" className="hover:text-black dark:hover:text-white transition-colors">Github</a>
              <a href="https://linkedin.com" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            </div>

          </footer>
        </div>
      </div>
    </Router>
  );
}