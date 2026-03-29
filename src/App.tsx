
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './components/Gallery';
import { Competitions } from './components/Competetions';
import { Contact } from './components/Contacts';
import { StatusBoard } from './components/DigitalStats';
import { ProjectArchive } from './ProjectArchive';
import AssistiveTouch from './components/AssistiveTouch';

const MainPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Content Area */}
      <main className="lg:col-span-8 space-y-12">
        <Hero />
        <Projects />
        <Competitions />
      </main>

      {/* Sidebar Area */}
      <aside className="lg:col-span-4">
        <div className="sticky top-1 space-y-8">
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-soft dark:bg-bg-dark text-black dark:text-white transition-colors duration-300 selection:bg-orange-500/30 z-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <AssistiveTouch />
          <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/projects" element={<ProjectArchive />} />
          </Routes>

          <footer className="mt-20 pb-10 border-t border-gray-100 dark:border-zinc-900 pt-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-medium text-gray-400 dark:text-zinc-600 uppercase tracking-[0.2em]">
                © 2026 LLOYD RAMIREZ
              </p>

              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-gray-100 dark:bg-zinc-800 hidden md:block" />
                <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-[0.15em]">
                  Inspired by <span className="mx-2 text-gray-300 dark:text-zinc-800">/</span>
                  <span className="text-black dark:text-white hover:text-orange-600 transition-colors cursor-default">
                    Bryl Lim
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}