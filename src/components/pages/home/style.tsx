import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    gap: 1em;
    padding: 1em;
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const HomeTextArea = styled(motion.div)<{ $isDarkMode: boolean }>`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 3em;
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#f8f9fa' : '#1d314c')};
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    width: 700px;
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#dee2e6' : '#1d314c')};
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
      width: 100%;
    }
  }
  @media only screen and (min-width: 1201px) and (max-width: 1500px) {
    p {
      font-size: 1.5rem;
      width: 500px;
    }
  }
`;

export const HomeIconsWrapper = styled.div<{ $isDarkMode: boolean }>`
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 2em;
    padding: 0;
  }
  li {
    list-style: none;
  }
  svg {
    font-size: 3rem;
    color: ${({ $isDarkMode }) => $isDarkMode && ' #b7b7ac'};
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ul {
      gap: 1em;
    }
    svg {
      font-size: 3rem;
    }
  }
`;

export const HomeStacksWrapper = styled(motion.div)<{ $isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#f8f9fa' : '#1d314c')};
    margin: 0px;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
`;

//VARIANTS
export const homeContainer = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
export const homeItem = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};
