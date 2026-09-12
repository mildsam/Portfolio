import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden transform transition-transform animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img 
            src={project.image} 
            alt={project.title} 
            className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-8 sm:p-12' : 'object-cover'}`} 
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x400/3B82F6/ffffff?text=Project'; }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-200">{project.subtitle}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors shadow-lg"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
          
          <div className="flex flex-wrap gap-4 items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">Role</p>
              <p className="font-medium text-textDark dark:text-white">{project.role}</p>
            </div>
            <div className="flex gap-4">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-textDark dark:text-white px-4 py-2 rounded-full transition-colors">
                  <GithubIcon className="w-4 h-4" /> View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-full transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Project
                </a>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {caseStudy.overview && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.overview}</p>
                </section>
              )}
              
              {caseStudy.problem && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Problem</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.problem}</p>
                </section>
              )}
              
              {caseStudy.approach && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.approach}</p>
                </section>
              )}

              {caseStudy.backendResponsibilities && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Backend Responsibilities</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.backendResponsibilities}</p>
                </section>
              )}

              {(caseStudy.technicalArchitecture || caseStudy.technicalImplementation) && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Technical Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.technicalArchitecture || caseStudy.technicalImplementation}</p>
                </section>
              )}

              {(caseStudy.machineLearningModel || caseStudy.featureEngineering) && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Machine Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2"><strong>Model:</strong> {caseStudy.machineLearningModel}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2"><strong>Feature Engineering:</strong> {caseStudy.featureEngineering}</p>
                  {caseStudy.explainability && <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2"><strong>Explainability:</strong> {caseStudy.explainability}</p>}
                  {caseStudy.optimization && <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2"><strong>Optimization:</strong> {caseStudy.optimization}</p>}
                </section>
              )}

              {caseStudy.outcome && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Outcome</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.outcome}</p>
                </section>
              )}
              
              {caseStudy.results && (
                <section>
                  <h3 className="text-xl font-bold text-textDark dark:text-white mb-3">Results</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{caseStudy.results}</p>
                </section>
              )}
            </div>

            <div className="space-y-8">
              {project.features && project.features.length > 0 && (
                <section className="bg-lightBg dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-textDark dark:text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <section>
                  <h3 className="text-lg font-bold text-textDark dark:text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
