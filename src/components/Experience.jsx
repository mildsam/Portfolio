import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">Experience</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>

        <div className="relative border-l-2 border-primary/30 dark:border-gray-700 ml-4 md:ml-6 space-y-12">
          
          {/* Premia */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>
            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">Backend Developer</h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">Premia</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>Developed robust backend REST APIs and business logic for a real-time virtual cinema platform.</li>
                <li>Implemented secure authentication, including passwordless magic-link and admin authentication.</li>
                <li>Integrated payment processing via Paystack and secure media authorization.</li>
                <li>Built real-time watch-party functionality using WebSockets.</li>
                <li>Managed Redis-based session enforcement for horizontal scaling and performed database operations with MongoDB/Mongoose.</li>
              </ul>
            </div>
          </div>

          {/* MyLurah */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>
            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-bold text-textDark dark:text-white">Backend Developer</h3>
                {/* <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">Joined during Version 2</span> */}
              </div>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">MyLurah</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>Contributed to backend engineering, implementing APIs and business logic for a women's health tracking platform.</li>
                <li>Built tracking functionality for menstrual cycles and pregnancy, including complex date calculations.</li>
                <li>Developed automated workflows and scheduled jobs using Node-Cron.</li>
                <li>Implemented push notification workflows with OneSignal to engage users effectively.</li>
              </ul>
            </div>
          </div>

          {/* Greenfield Explore */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>
            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">Web Developer</h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">Greenfield Explore</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>Developed a professional corporate website to establish a strong digital presence for an oil & gas company.</li>
                <li>Integrated content management functionality and an admin dashboard.</li>
                <li>Ensured the implementation was SEO-focused and fully responsive across devices.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
