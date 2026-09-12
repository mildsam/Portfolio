import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 py-20 lg:px-16">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div className="relative z-10 max-w-3xl fade-in-up">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4 border border-accent/20">
          Welcome to my world
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-textDark dark:text-white leading-tight mb-4">
          Backend-Focused <br /> <span className="text-primary dark:text-purple-400">Full-Stack Engineer</span>
        </h1>
        <p className="text-xl text-textGray dark:text-gray-300 mb-8 max-w-2xl">
          I build reliable backend systems, REST APIs and database-driven web applications, while working across the full stack to turn practical ideas into useful software.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="bg-accent text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-600 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1">
            View My Work
          </a>
          <a href="/assets/documents/Samuel_Idakwo_Professional_CV.pdf" target="_blank" rel="noreferrer" className="bg-primary dark:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primaryDark dark:hover:bg-purple-800 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
