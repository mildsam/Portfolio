import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-textDark dark:bg-black text-white py-8 text-center px-6 lg:px-16 transition-colors">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Samuel Idakwo</span>. All rights reserved.
          </p>
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="text-xs text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </button>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-fade-in-up border border-gray-100 dark:border-gray-700">
            <button 
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-textDark dark:text-white">Privacy Policy</h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                <strong>I respect your privacy.</strong> This website is a personal portfolio and does not use tracking cookies or intrusive analytics to monitor your activity.
              </p>
              <p>
                Any information you submit via the contact form (such as your name and email address) is sent directly to me and used solely for the purpose of replying to your inquiry.
              </p>
              <p>
                Your data will never be sold, shared with third parties, or added to any marketing mailing lists.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="px-6 py-2.5 bg-primary dark:bg-purple-500 text-white rounded-xl hover:bg-primaryDark dark:hover:bg-purple-600 transition-colors text-sm font-semibold shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
