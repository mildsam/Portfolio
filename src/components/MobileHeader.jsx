import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';

const MobileHeader = ({ toggleMobileMenu, toggleTheme, isDarkMode }) => {
  return (
    <div className="lg:hidden fixed top-0 w-full bg-primary dark:bg-gray-800 text-white z-20 px-6 py-4 flex justify-between items-center shadow-md transition-colors">
      <h2 className="text-xl font-bold">Samuel Idakwo</h2>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors">
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
