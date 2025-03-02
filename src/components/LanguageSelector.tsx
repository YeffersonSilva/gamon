import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "pt", name: "Português" },
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            currentLanguage === lang.code
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
