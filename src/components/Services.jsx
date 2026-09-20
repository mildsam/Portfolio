import React from 'react';
import {
  Server,
  Code,
  Link,
  BriefcaseBusiness,
  LifeBuoy
} from 'lucide-react';

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 lg:px-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">
          Services
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Backend Development */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-primary/30 dark:hover:border-purple-500/30 transition-all duration-500 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 dark:bg-white/5 text-primary dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-purple-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Server className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">
                Backend Development
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                REST APIs, authentication, backend business logic and
                database-driven applications using Node.js and Express.js.
              </p>
            </div>
          </div>

          {/* Web Application Development */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 dark:bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 dark:group-hover:bg-accent/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent/10 dark:bg-white/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <Code className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-accent transition-colors">
                Web Application Development
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Responsive web applications and interfaces using JavaScript,
                React, HTML, CSS and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* API & System Integration */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-primary/30 dark:hover:border-purple-500/30 transition-all duration-500 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 dark:bg-white/5 text-primary dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-purple-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Link className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">
                API & System Integration
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Integration of payment, notification, media and other
                third-party services into web applications.
              </p>
            </div>
          </div>

          {/* Business Applications */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 hover:-translate-y-2 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 dark:bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 dark:group-hover:bg-accent/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent/10 dark:bg-white/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <BriefcaseBusiness className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-accent transition-colors">
                Business Applications
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Custom web applications built around specific business
                requirements, workflows and content management needs.
              </p>
            </div>
          </div>

          {/* Maintenance & Updates */}
          <div className="relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 dark:from-gray-800 dark:to-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-purple-500/10 hover:-translate-y-2 hover:border-primary/30 dark:hover:border-purple-500/30 transition-all duration-500 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 dark:bg-purple-500/5 rounded-full blur-3xl group-hover:bg-primary/20 dark:group-hover:bg-purple-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 dark:bg-white/5 text-primary dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-purple-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <LifeBuoy className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary dark:group-hover:text-purple-400 transition-colors">
                Maintenance & Updates
              </h3>

              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                Bug fixes, feature development, content updates and
                improvements to existing applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;