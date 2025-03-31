import React, { createContext, useContext, useState, ReactNode } from "react";
import { locales } from './locales'; 

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
  texts: { [key: string]: string };
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const texts = locales[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
