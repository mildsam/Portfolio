import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">
          {/* Image Container */}
          <div className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[380px] shrink-0 relative mx-auto group">
            <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="absolute inset-0 bg-primary/20 dark:bg-purple-500/20 rounded-3xl transform -translate-x-3 -translate-y-3 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4"></div>
            <img 
              src="/assets/images/profileImg.jpg" 
              alt="Samuel Idakwo" 
              className="relative rounded-2xl shadow-2xl w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] xl:h-[460px] object-cover border-4 border-white dark:border-gray-700 transition-transform duration-500 group-hover:scale-[1.02]" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x600/3B82F6/ffffff?text=S.I.'; }} 
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full xl:flex-1">
            <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">About Me</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
            <p className="text-textGray dark:text-gray-300 mb-6 leading-relaxed">
              I am a Computer Science graduate from the University of Benin and a backend-focused full-stack developer interested in building reliable, practical software systems.
            </p>
            <p className="text-textGray dark:text-gray-300 mb-6 leading-relaxed">
              My experience includes developing REST APIs, backend business logic, authentication systems, database-driven applications and third-party integrations with Node.js and Express.js. I have also contributed to real-world client projects and full-stack applications while continuing to strengthen my software engineering fundamentals.
            </p>
            <p className="text-textGray dark:text-gray-300 mb-6 leading-relaxed">
              I enjoy understanding how systems work behind the interface and turning real problems into maintainable software.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-lightBg dark:bg-gray-700 rounded-lg border-l-4 border-primary dark:border-purple-500">
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                <p className="font-semibold dark:text-white">Samuel Idakwo</p>
              </div>
              <div className="p-4 bg-lightBg dark:bg-gray-700 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-semibold break-all dark:text-white">idakwosamuel2@gmail.com</p>
              </div>
              <div className="p-4 bg-lightBg dark:bg-gray-700 rounded-lg border-l-4 border-accent">
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold dark:text-white">Benin City, Nigeria</p>
              </div>
              <div className="p-4 bg-lightBg dark:bg-gray-700 rounded-lg border-l-4 border-primary dark:border-purple-500">
                <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                <p className="font-semibold dark:text-white">Open to Opportunities</p>
              </div>
            </div>
            
            <a href="/assets/documents/Samuel_Idakwo_Professional_CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary dark:text-purple-400 border-2 border-primary dark:border-purple-400 px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all">
              <Download className="w-5 h-5 mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
