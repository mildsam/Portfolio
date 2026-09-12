import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filters = ['All', 'Backend', 'Full-Stack', 'AI / ML', 'Earlier Projects'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') {
      return true;
    }
    return project.category.includes(filter);
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });

  const N = sortedProjects.length;

  useEffect(() => {
    if (scrollRef.current && N >= 4 && scrollRef.current.children.length > 0) {
      const childWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 32;
      // Start in the middle set to allow scrolling left
      scrollRef.current.scrollTo({ left: (childWidth + gap) * N, behavior: 'auto' });
    }
  }, [N]);

  const handleScroll = () => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;
    
    const childWidth = scrollRef.current.children[0].offsetWidth;
    const gap = 32; // gap-8
    const itemWidth = childWidth + gap;
    const scrollLeft = scrollRef.current.scrollLeft;
    
    if (N >= 4) {
      if (scrollLeft >= 2 * N * itemWidth) {
        scrollRef.current.classList.remove('scroll-smooth');
        scrollRef.current.scrollLeft = scrollLeft - (N * itemWidth);
        void scrollRef.current.offsetWidth;
        scrollRef.current.classList.add('scroll-smooth');
      } else if (scrollLeft <= 0) {
        scrollRef.current.classList.remove('scroll-smooth');
        scrollRef.current.scrollLeft = scrollLeft + (N * itemWidth);
        void scrollRef.current.offsetWidth;
        scrollRef.current.classList.add('scroll-smooth');
      }
    }

    const rawIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
    setActiveIndex(rawIndex % Math.max(1, N));
  };

  const scrollToItem = (index) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const childWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 32;
      const itemWidth = childWidth + gap;
      
      const currentRawIndex = Math.round(scrollRef.current.scrollLeft / itemWidth);
      const currentModIndex = currentRawIndex % N;
      const diff = index - currentModIndex;
      
      scrollRef.current.scrollBy({ left: diff * itemWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered || N < 4) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const childWidth = scrollRef.current.children[0].offsetWidth;
        const gap = 32;
        scrollRef.current.scrollBy({ left: childWidth + gap, behavior: 'smooth' });
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, N]);

  const scroll = (direction) => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const childWidth = scrollRef.current.children[0].offsetWidth;
      const gap = 32;
      const scrollAmount = childWidth + gap;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-16 bg-lightBg dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">Portfolio</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>

        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide portfolio-filters">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {sortedProjects.length === 0 ? (
          <div className="text-center py-16 my-10 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 transition-colors">
            <FolderOpen className="w-16 h-16 text-accent mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold dark:text-white mb-2">No Projects Available</h3>
            <p className="text-gray-500 dark:text-gray-400">I haven't added any projects to this category yet.</p>
          </div>
        ) : sortedProjects.length >= 4 ? (
          <div 
            className="relative overflow-hidden group/marquee py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-lightBg dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-lightBg dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll('left')} 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-md text-primary dark:text-purple-400 hover:bg-white dark:hover:bg-gray-700 opacity-0 group-hover/marquee:opacity-100 transition-opacity backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-md text-primary dark:text-purple-400 hover:bg-white dark:hover:bg-gray-700 opacity-0 group-hover/marquee:opacity-100 transition-opacity backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            >
              {[...sortedProjects, ...sortedProjects, ...sortedProjects].map((project, idx) => (
                <div key={`${project.id}-${idx}`} className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 flex h-auto snap-center">
                  <div className="w-full flex-grow flex">
                    <ProjectCard project={project} onViewCaseStudy={setSelectedProject} />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-4">
              {sortedProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToItem(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewCaseStudy={setSelectedProject} 
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
