import React, { useContext } from 'react';
import { m } from 'framer-motion';
import { LanguageContext } from '../../App';
import { translations } from '../../translations';

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const adminDetails = [
    { label: t.about.district, value: 'Dhule' },
    { label: t.about.taluka, value: 'Shirpur' },
    { label: t.about.assembly, value: 'Shirpur assembly constituency' },
    { label: t.about.parliament, value: 'Nandurbar parliamentary constituency' },
    { label: t.about.mla, value: 'Kashiram Vechan Pawara' },
    { label: t.about.mp, value: 'Dr. Heena Vijaykumar Gavit' },
    { label: t.about.serpanch, value: 'Krishna Ramesh Patil' },
    { label: t.about.pinCode, value: '425405' },
    { label: t.about.postOffice, value: 'Upper Shirpur' },
    { label: t.about.stdCode, value: '02563' },
    { label: t.about.elevation, value: '188 meters' },
    { label: t.about.language, value: 'Ahirani, Kannada, Marathi, Bhili, Andh' }
  ];

  const censusData = [
    { label: t.demographics.totalPopulation, value: '1,156' },
    { label: t.demographics.femalePopPercent, value: '43.9% (508)' },
    { label: t.demographics.literacyRate, value: '79.8% (923)' },
    { label: t.demographics.femaleLiteracy, value: '32.1% (371)' },
    { label: t.demographics.scheduledTribes, value: '15.1% (174)' },
    { label: t.demographics.scheduledCastes, value: '7.9% (91)' },
    { label: t.demographics.workingPopulation, value: '35.8%' },
    { label: t.demographics.childPopulation, value: '63' }
  ];

  return (
    <section id="about" className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <m.h1 initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {t.about.title}
          </m.h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Administrative Details */}
        <div className="bg-gray-700 rounded-lg p-8 mb-12 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-white mb-6">{t.about.administration}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminDetails.map((item, index) => (
              <m.div key={index} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.03 }} className="bg-gray-800 p-4 rounded">
                <p className="text-gray-400 text-sm font-semibold mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Census Data */}
        <div className="bg-gray-700 rounded-lg p-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-white mb-6">{t.demographics.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {censusData.map((item, index) => (
              <m.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.04 }} className="bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                <p className="text-gray-400 text-sm font-semibold mb-1">{item.label}</p>
                <p className="text-green-400 font-bold text-lg">{item.value}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
