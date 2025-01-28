import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const savedLocale = localStorage.getItem("locale") || "id";
  const [locale, setLocale] = useState(savedLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};