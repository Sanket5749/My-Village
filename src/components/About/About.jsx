import React, { useContext } from 'react';
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
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {t.about.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5m-15-4h12m-12 4v8m0-8L10.5 1.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Agricultural Hub</h3>
            <p className="text-gray-300">Primary livelihood through farming with various crops grown throughout the year</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">United Community</h3>
            <p className="text-gray-300">Strong bonds and cooperative spirit among residents working together</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v-6a1.5 1.5 0 01-3 0v6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6 10.333z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rich Culture</h3>
            <p className="text-gray-300">Traditional practices and cultural heritage preserved through generations</p>
          </div>
        </div>

        {/* Geography Section */}
        <div className="bg-gray-700 rounded-lg p-8 mb-12 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-white mb-4">{t.about.geography}</h2>
          <p className="text-gray-200 leading-relaxed mb-4">{t.about.geographyDesc}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-gray-400 text-sm">{t.about.nearbyNational}</p>
              <p className="text-white font-semibold">{t.about.nh160}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-gray-400 text-sm">{t.about.nearbyRivers}</p>
              <p className="text-white font-semibold">{t.about.bhad}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-gray-400 text-sm"></p>
              <p className="text-white font-semibold">{t.about.kaner}</p>
            </div>
          </div>
        </div>

        {/* Administrative Details */}
        <div className="bg-gray-700 rounded-lg p-8 mb-12 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold text-white mb-6">{t.about.administration}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminDetails.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded">
                <p className="text-gray-400 text-sm font-semibold mb-1">{item.label}</p>
                <p className="text-white font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Census Data */}
        <div className="bg-gray-700 rounded-lg p-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-white mb-6">{t.demographics.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {censusData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded hover:bg-gray-750 transition">
                <p className="text-gray-400 text-sm font-semibold mb-1">{item.label}</p>
                <p className="text-green-400 font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
