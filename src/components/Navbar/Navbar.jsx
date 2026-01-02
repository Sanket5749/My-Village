import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../App';
import { translations } from '../../translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <nav className='w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-white'>
              {language === 'en' ? 'Babuldhe Village' : 'बाभुळदे गाव'}
            </h1>
          </div>
          
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a href="#home" className='text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out'>
                {t.navbar.home}
              </a>
              <a href="#about" className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out'>
                {t.navbar.about}
              </a>
              <a href="#people" className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200 ease-in-out'>
                {t.navbar.people}
              </a>
              <button
                onClick={toggleLanguage}
                className='ml-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-4 py-2 rounded-md text-sm transition duration-200 ease-in-out'
              >
                {t.navbar.language}
              </button>
            </div>
          </div>

          <div className='md:hidden flex items-center gap-2'>
            <button
              onClick={toggleLanguage}
              className='bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-3 py-1 rounded text-xs transition duration-200'
            >
              {t.navbar.language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition duration-200'
            >
              <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-blue-700'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a href="#home" className='text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium'>
              {t.navbar.home}
            </a>
            <a href="#about" className='text-gray-100 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              {t.navbar.about}
            </a>
            <a href="#people" className='text-gray-100 hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              {t.navbar.people}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
