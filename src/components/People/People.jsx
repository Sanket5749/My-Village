import React, { useContext, useState } from "react";
import { LanguageContext } from "../../App";
import { translations } from "../../translations";

const persons = [
  {
    id: 1,
    nameEn: "Sanket Patil",
    nameMr: "संकेत पाटील",
    pic: "",
    roleEn: "Agricultural Innovator & Leader",
    roleMr: "कृषी नवप्रवर्तक आणि नेता",
    descEn: "Sanket has revolutionized farming practices in Babuldhe by introducing sustainable techniques and modern technology.",
    descMr: "संकेत यांनी टिकाऊ तंत्र आणि आधुनिक तंत्रज्ञान सादर करून बाभुळदेतील कृषी पद्धतीमध्ये क्रांती केली आहे."
  }
];

const People = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [selected, setSelected] = useState(null);

  const get = (obj, enKey, mrKey) => (language === "en" ? obj[enKey] : obj[mrKey]);

  return (
    <section id="people" className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {language === 'en' ? 'Notable People of Babuldhe' : 'बाभुळदेचे उल्लेखनीय लोक'}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg">{language === 'en' ? 'Meet the inspiring individuals shaping our village' : 'आपल्या गावाला आकार देणाऱ्या प्रेरणादायी व्यक्तींशी भेटा'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {persons.map((person) => (
            <div key={person.id} onClick={() => setSelected(person)} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer">
              <div className="w-full h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                {person.pic ? (
                  <img src={person.pic} alt={get(person, 'nameEn', 'nameMr')} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-1">{get(person, 'nameEn', 'nameMr')}</h2>
                <p className="text-green-400 font-semibold mb-4">{get(person, 'roleEn', 'roleMr')}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">{get(person, 'descEn', 'descMr')}</p>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition duration-300">
                    {language === 'en' ? 'View Profile' : 'प्रोफाइल पहा'}
                  </button>
                  <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-500 transition duration-300">
                    {language === 'en' ? 'Contact' : 'संपर्क करा'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple modal for selected person */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="bg-gray-800 rounded-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{get(selected, 'nameEn', 'nameMr')}</h2>
                <p className="text-green-400 mb-4">{get(selected, 'roleEn', 'roleMr')}</p>
                <p className="text-gray-300 mb-6">{get(selected, 'descEn', 'descMr')}</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg">{language === 'en' ? 'Get in Touch' : 'संपर्क करा'}</button>
                  <button onClick={() => setSelected(null)} className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg">{language === 'en' ? 'Close' : 'बंद करा'}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default People;
