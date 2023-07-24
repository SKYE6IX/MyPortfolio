import styled from 'styled-components';

export const FooterContainer = styled.footer<{ $isDarkMode: boolean }>`
  height: 80px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: auto;
  transition: background-color 1s ease-in-out;
  & .fa-heart {
    color: red;
  }
  background-color: ${({ $isDarkMode }) => $isDarkMode && 'black'};
  color: ${({ $isDarkMode }) => $isDarkMode && 'white'};
`;
