import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 lg:px-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">
          Experience
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>

        <div className="relative border-l-2 border-primary/30 dark:border-gray-700 ml-4 md:ml-6 space-y-12">

          {/* Premia */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>

            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">
                Backend Developer
              </h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">
                Premia
              </h4>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>
                  Developed backend REST APIs and business logic for a
                  real-time virtual cinema platform.
                </li>
                <li>
                  Implemented authentication, including passwordless
                  magic-link and admin authentication.
                </li>
                <li>
                  Integrated Paystack payment processing and secure media
                  playback authorization.
                </li>
                <li>
                  Built real-time watch-party functionality using WebSockets.
                </li>
                <li>
                  Worked with Redis for session enforcement and MongoDB/Mongoose
                  for database operations.
                </li>
              </ul>
            </div>
          </div>

          {/* MyLurah */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>

            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">
                Backend Developer
              </h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">
                MyLurah
              </h4>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>
                  Contributed to the backend of a women’s health and wellness
                  mobile application during Version 2.
                </li>
                <li>
                  Built APIs and business logic for menstrual cycle and
                  pregnancy tracking.
                </li>
                <li>
                  Implemented date and cycle calculations using Day.js.
                </li>
                <li>
                  Developed scheduled background jobs using Node-Cron.
                </li>
                <li>
                  Implemented push notification workflows using OneSignal.
                </li>
              </ul>
            </div>
          </div>

          {/* Greenfield Explore */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>

            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">
                Web Developer
              </h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">
                Greenfield Explore
              </h4>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>
                  Developed a corporate website for an oil and gas company.
                </li>
                <li>
                  Integrated content management functionality and an admin
                  dashboard.
                </li>
                <li>
                  Implemented responsive layouts and SEO-focused website
                  structure.
                </li>
              </ul>
            </div>
          </div>

          {/* Zeqah */}
          <div className="relative pl-8 md:pl-10">
            <div className="absolute -left-[25px] top-1 bg-white dark:bg-gray-800 border-4 border-primary dark:border-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary dark:text-purple-400" />
            </div>

            <div className="bg-lightBg dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-textDark dark:text-white">
                Lead Web Developer (Volunteer)
              </h3>
              <h4 className="text-lg text-primary dark:text-purple-400 font-medium mb-4">
                Zeqah
              </h4>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                <li>
                  Built a responsive educational support platform for student
                  admission guidance and IT skill development.
                </li>
                <li>
                  Developed a custom CMS using Firebase Authentication and
                  Firestore for blog management.
                </li>
                <li>
                  Implemented Markdown editing with live preview, blog
                  search/filtering, and lead-capture forms.
                </li>
                <li>
                  Built an admin dashboard for managing submissions.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;