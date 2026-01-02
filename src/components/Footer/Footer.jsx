import React, { useContext } from 'react';
import { m } from 'framer-motion';
import { LanguageContext } from '../../App';
import { translations } from '../../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-gradient-to-r from-gray-900 to-black border-t border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <m.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h3 className='text-lg font-bold text-white mb-4'>
              {language === 'en' ? 'Babuldhe Village' : 'बाभुळदे गाव'}
            </h3>
            <p className='text-gray-400 text-sm'>
              {language === 'en'
                ? 'Welcome to the official website of Babuldhe Village. Explore our rich cultural heritage, meet our community, and discover the beauty of rural Maharashtra.'
                : 'बाभुळदे गावाच्या अधिकृत वेबसाइटमध्ये आपले स्वागत आहे. आमचे समृद्ध सांस्कृतिक वारसा शोधा, आमच्या समुदायाला भेटा, आणि ग्रामीण महाराष्ट्राची सुंदरता शोधा.'
              }
            </p>
          </m.div>
          
          <m.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.03 }}>
            <h4 className='text-white font-semibold mb-4'>{t.footer.quickLinks}</h4>
            <ul className='space-y-2 text-sm'>
              <li><a href="#home" className='text-gray-400 hover:text-white transition duration-200'>{t.navbar.home}</a></li>
              <li><a href="#about" className='text-gray-400 hover:text-white transition duration-200'>{t.navbar.about}</a></li>
              <li><a href="#people" className='text-gray-400 hover:text-white transition duration-200'>{t.navbar.people}</a></li>
            </ul>
          </m.div>
          
          <m.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.06 }}>
            <h4 className='text-white font-semibold mb-4'>{t.footer.contact}</h4>
            <ul className='space-y-2 text-sm'>
              <li className='text-gray-400'>{language === 'en' ? 'Phone: 02563' : 'फोन: 02563'}</li>
              <li className='text-gray-400'>{language === 'en' ? 'Pin Code: 425405' : 'पिन कोड: 425405'}</li>
              <li className='text-gray-400'>{language === 'en' ? 'Taluka: Shirpur' : 'तालुका: शिरपूर'}</li>
              <li className='text-gray-400'>{language === 'en' ? 'District: Dhule' : 'जिल्हा: धुळे'}</li>
            </ul>
          </m.div>
          
          <m.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.09 }}>
            <h4 className='text-white font-semibold mb-4'>{language === 'en' ? 'Follow Us' : 'आमचा अनुसरण करा'}</h4>
            <div className='flex space-x-4'>
              <a href="#" className='text-gray-400 hover:text-blue-400 transition duration-200'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z' />
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-blue-400 transition duration-200'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M8.29 20v-7.21H5.413V9.25h2.882V6.897c0-2.905 1.746-4.733 4.519-4.733 1.296 0 2.414.096 2.747.139v3.205h-1.888c-1.497 0-1.788.711-1.788 1.755V9.25h3.585l-.467 3.539h-3.118V20' />
                </svg>
              </a>
              <a href="#" className='text-gray-400 hover:text-blue-400 transition duration-200'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M19 3.795c-.56.275-1.16.437-1.797.517 1.150-.689 2.032-1.778 2.448-3.088-.597.358-1.240.656-1.884.8-.564-.603-1.368-.978-2.257-.978-1.708 0-3.085 1.378-3.085 3.086 0 .242.027.477.085.702-2.565-.13-4.848-1.356-6.37-3.22-.266.458-.42.990-.42 1.554 0 1.071.545 2.016 1.374 2.572-.506-.016-.982-.155-1.397-.387v.039c0 1.495 1.064 2.743 2.479 3.028-.26.071-.534.107-.815.107-.199 0-.393-.02-.581-.057.393 1.224 1.529 2.113 2.873 2.138-1.056.827-2.388 1.320-3.839 1.320-.249 0-.494-.015-.735-.044 1.369.878 2.996 1.386 4.741 1.386 5.690 0 8.777-4.714 8.777-8.778 0-.133-.003-.266-.009-.399.603-.435 1.125-979 1.571-1.610z' />
                </svg>
              </a>
            </div>
          </m.div>
        </div>
        
        <div className='border-t border-gray-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              &copy; {currentYear} {language === 'en' ? 'Babuldhe Village' : 'बाभुळदे गाव'}. {language === 'en' ? 'All rights reserved.' : 'सर्व हक्क राखीव.'}
            </p>
            <div className='flex space-x-6 text-sm'>
              <a href="#" className='text-gray-400 hover:text-white transition duration-200'>{language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}</a>
              <a href="#" className='text-gray-400 hover:text-white transition duration-200'>{language === 'en' ? 'Terms of Service' : 'सेवा शर्तें'}</a>
              <a href="#" className='text-gray-400 hover:text-white transition duration-200'>{language === 'en' ? 'Contact' : 'संपर्क'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
