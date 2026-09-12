import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onViewCaseStudy }) => {
  // Take up to 4 technologies for the card display
  const displayTechs = project.technologies.slice(0, 4);

  return (
    <div className="project-item bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
      <div className="relative overflow-hidden h-48 shrink-0 bg-gray-100 dark:bg-gray-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.imageFit === 'contain' ? 'object-contain p-6' : 'object-cover'}`} 
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/3B82F6/ffffff?text=Project'; }} 
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => onViewCaseStudy(project)}
            className="bg-white text-primary px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg hover:bg-gray-100"
          >
            View Case Study
          </button>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-xl dark:text-white">{project.title}</h4>
        </div>
        <p className="text-xs font-semibold text-primary dark:text-purple-400 mb-3 uppercase tracking-wider">{project.role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {displayTechs.map(tech => (
              <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-100 dark:border-gray-700 pt-4">
            <button 
              onClick={() => onViewCaseStudy(project)}
              className="text-sm font-semibold text-textDark dark:text-white hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              Case Study &rarr;
            </button>
            
            <div className="flex gap-3">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-textDark dark:hover:text-white transition-colors" title="View Source">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && !project.repository && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-textDark dark:hover:text-white transition-colors" title="Live Preview">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
