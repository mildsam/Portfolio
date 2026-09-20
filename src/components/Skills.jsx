import React from 'react';
import { skills } from '../data/skills';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-16 bg-lightBg dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">Technical Skills</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Backend */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-primary/30 dark:hover:border-purple-500/30 transition-all duration-300 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 text-primary dark:text-purple-400 border-b pb-2 dark:border-gray-700 group-hover:border-primary/50 dark:group-hover:border-purple-400/50 transition-colors">Backend Development</h3>
              <ul className="space-y-3">
                {skills.Backend.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-accent group-hover/item:scale-125 transition-transform" />
                    <span className="group-hover/item:text-textDark dark:group-hover/item:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Databases & Frontend */}
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-primary dark:text-purple-400 border-b pb-2 dark:border-gray-700 group-hover:border-accent/50 transition-colors">Databases</h3>
                <ul className="space-y-3">
                  {skills.Databases.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-accent group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-textDark dark:group-hover/item:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-primary/30 dark:hover:border-purple-500/30 transition-all duration-300 group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-primary dark:text-purple-400 border-b pb-2 dark:border-gray-700 group-hover:border-primary/50 dark:group-hover:border-purple-400/50 transition-colors">Frontend</h3>
                <ul className="space-y-3">
                  {skills.Frontend.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-accent group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-textDark dark:group-hover/item:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tools & Integrations + Currently Developing */}
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex-1 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-primary dark:text-purple-400 border-b pb-2 dark:border-gray-700 group-hover:border-accent/50 transition-colors">Development Tools</h3>
                <ul className="space-y-3 grid grid-cols-2 gap-x-2">
                  {skills.ToolsAndIntegrations.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm group/item hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="truncate group-hover/item:text-textDark dark:group-hover/item:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-8 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700 border-t-4 border-t-accent hover:border-t-primary dark:hover:border-t-purple-400 transition-all duration-500 group">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-primary/10 dark:group-hover:bg-purple-500/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 text-textDark dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">Currently Developing</h3>
                <ul className="space-y-2">
                  {skills.CurrentlyDeveloping.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm italic group/item hover:translate-x-2 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover/item:scale-150 group-hover/item:bg-primary dark:group-hover/item:bg-purple-400 transition-all"></span>
                      <span className="group-hover/item:text-gray-700 dark:group-hover/item:text-gray-200 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
