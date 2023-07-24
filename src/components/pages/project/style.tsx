import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 30em);
  justify-content: center;
  gap: 9em;
  row-gap: 2em;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    border-radius: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 70%;
  }
`;

export const ProjectTitle = styled.h2<{ $isDarkMode: boolean }>`
  text-transform: uppercase;
  font-family: 'Roboto' sans-serif;
  font-size: 1.2em;
  color: ${({ $isDarkMode }) => $isDarkMode && '#f8f9fa'};
`;

export const ProjectLanguageWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 0.5em;
  }
  li {
    padding: 1em;
    margin: 0px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 45px;
    background: linear-gradient(45deg, #f8f9fa, #f8f9fa);
    -webkit-box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 0.21);
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    li {
      font-size: 0.8rem;
    }
  }
`;

export const ProjectText = styled.div<{ $isDarkMode: boolean }>`
  font-family: 'Roboto' sans-serif;
  font-size: 1em;
  line-height: 1.2em;
  color: ${({ $isDarkMode }) => $isDarkMode && '#f8f9fa'};
`;

export const ProjectLinks = styled.div<{ $isDarkMode: boolean }>`
  margin-top: 1em;
  text-align: center;
  svg {
    font-size: 2em;
    color: ${({ $isDarkMode }) => $isDarkMode && '#b7b7ac'};
  }
`;
