import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
