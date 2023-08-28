import React, { createContext, useState, useEffect } from 'react';

type DefaultValue = {
  isDarkMode: boolean;
  toggleDarkMode?: () => void;
};

export const ThemeContext = createContext<DefaultValue>({ isDarkMode: false });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkmode] = useState(
    JSON.parse(window.localStorage.getItem('darkMode')!) || false
  );
  useEffect(() => {
    window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkMode);
    window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  };

  return (
    <ThemeContext.Provider
      value={{ toggleDarkMode: toggleDarkMode, isDarkMode: isDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
