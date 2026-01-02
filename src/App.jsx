import React, { useState, useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import People from "./components/People/People";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const LanguageContext = React.createContext();

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'mr';
    } catch (e) {
      return 'mr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', language);
    } catch (e) {}
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <LazyMotion features={domAnimation}>
        <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden">
          <Navbar />
          <main>
            <Home />
            <About />
            <People />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </LanguageContext.Provider>
  );
}
