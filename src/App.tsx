import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor, FilmGrain } from './components/Effects';
import { Navbar } from './components/Navbar';
import { Hero, About, Work, Skills, Resume, Contact, ProjectDetail, CategoryDetail, Project } from './components/Sections';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | null>(null);

  const isLocked = !!selectedProject || !!selectedCategory;

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <FilmGrain />
          <Navbar />
          
          {/* Fixed Cinematic Background for Skills/Resume/Contact */}
          <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover brightness-[0.3] contrast-125 saturate-[1.2] sepia-[0.8] hue-rotate-[10deg]"
            >
              <source src="https://drive.google.com/uc?export=download&id=161R0HOMNBQvO3xrw02dV0T9JHcdH8fFs" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-cinematic-gold/15 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black via-transparent to-cinematic-black opacity-80" />
          </div>

          <main className={`snap-container ${isLocked ? 'overflow-hidden' : ''}`}>
            <Hero />
            <About />
            <Work 
              onProjectSelect={setSelectedProject} 
              onCategorySelect={setSelectedCategory}
            />
            <Skills />
            <Resume />
            <Contact />
          </main>

          <AnimatePresence>
            {selectedCategory && (
              <CategoryDetail
                category={selectedCategory}
                onClose={() => setSelectedCategory(null)}
                onProjectSelect={setSelectedProject}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedProject && (
              <ProjectDetail 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
              />
            )}
          </AnimatePresence>

          {/* Global Cinematic Overlays */}
          <div className="fixed inset-0 pointer-events-none z-[9996]">
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
            
            {/* Top/Bottom Cinematic Bars (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-8 bg-cinematic-black/40" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-cinematic-black/40" />
          </div>
        </>
      )}
    </div>
  );
}
