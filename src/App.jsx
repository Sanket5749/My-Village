import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import People from "./components/People/People";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const LanguageContext = React.createContext();

export default function App() {
  const [language, setLanguage] = useState('mr');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Home />
          <About />
          <People />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
