import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { translations } from "../../translations";
import p1 from "../../assets/p1.jpeg";
import p2 from "../../assets/p2.jpeg";
import p3 from "../../assets/p3.jpeg";
import p4 from "../../assets/p4.jpeg";
import p5 from "../../assets/p5.jpeg";
import p6 from "../../assets/p6.jpeg";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  const gallery = [p1, p2, p3, p4, p5, p6];

  return (
    <section id="home" className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {t.home.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 border-l-4 border-green-500 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">{t.home.aboutOurVillage}</h2>
          <p className="text-gray-200 leading-relaxed text-lg mb-4">{t.home.aboutDesc1}</p>
          <p className="text-gray-200 leading-relaxed text-lg mb-4">{t.home.aboutDesc2}</p>
          <p className="text-gray-200 leading-relaxed text-lg">{t.home.aboutDesc3}</p>
        </div>
        
        {/* Gallery Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">{t.home.galleryTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {gallery.map((src, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <img src={src} alt={`Village ${idx + 1}`} className="w-full h-44 object-cover transform transition duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
