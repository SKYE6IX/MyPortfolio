import React, { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

import "../styles/PageContent.css";

function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <main className={`PageContent ${isDarkMode ? "darkMode " : "lightMode"}`}>
      {props.children}
    </main>
  );
}

export default PageContent;
