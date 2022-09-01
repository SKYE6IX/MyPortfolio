import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkmode] = useState(
    JSON.parse(window.localStorage.getItem("darkMode"))
  );

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkMode);
    window.localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  };

  return (
    <ThemeContext.Provider
      value={{ toggleDarkMode: toggleDarkMode, isDarkMode: isDarkMode }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
