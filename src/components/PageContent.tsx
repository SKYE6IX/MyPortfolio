import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context/theme.context';

const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
    font-size: 16px;

}
*, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;
const Main = styled.main<{ $isDarkMode: boolean }>`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 1s ease-in-out;
  box-sizing: border-box;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'black' : 'white')};
`;

const PageContent = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Main $isDarkMode={isDarkMode}>
      <GlobalStyles />
      {children}
    </Main>
  );
};

export default PageContent;
