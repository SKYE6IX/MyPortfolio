import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/theme.context';
const GlobalStyles = createGlobalStyle`
html{
    height: 100%;
    box-sizing: border-box;
    font-size: 16px;
};
*, *:before, *:after {
    box-sizing: inherit;
  };
  body{
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1em;
  };
`;
const Main = styled.main`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 1s ease-in-out;
  box-sizing: border-box;
`;

// .darkMode{
//     background-color: black;
// }

// .lightMode{
//     background-color: white;
// }

const PageContent = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Main className={`PageContent ${isDarkMode ? 'darkMode ' : 'lightMode'}`}>
      <GlobalStyles />
      {children}
    </Main>
  );
};

export default PageContent;