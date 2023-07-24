import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled(motion.div)`
  margin-top: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactText = styled.div<{ $isDarkMode: boolean }>`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2.5em;
  border-radius: 1em;
  background: ${({ $isDarkMode }) => ($isDarkMode ? '#383737' : '#ebebeb')};
  box-shadow:${({ $isDarkMode }) =>
    $isDarkMode
      ? '39px 39px 56px #232222, -39px -39px 56px #4d4c4c'
      : '39px 39px 78px #a5a5a5, -39px -39px 78px #dbdbdb'}
  text-align: center;
  p {
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    text-align:center;
    color: ${({ $isDarkMode }) => $isDarkMode && '#f8f9fa'};
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    width: 60%;
  }
`;

export const ContactMail = styled.a<{ $isDarkMode: boolean }>`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#f8f9fa' : 'black')};
  transition:
    border-bottom ease-in-out 0.3s,
    transform ease-in-out 0.3s;
  width: 180px;
  height: 25px;
  &:hover {
    border-bottom: 2px solid grey;
    transform: scale(1.2);
  }
`;

export const ContactIconsWrapper = styled.div<{ $isDarkMode: boolean }>`
  width: 50%;
  ul {
    display: flex;
    justify-content: center;
    gap: 8%;
    padding: 0;
  }
  li {
    list-style: none;
  }
  svg {
    font-size: 2.5em;
    color: ${({ $isDarkMode }) => $isDarkMode && '#b7b7ac'};
  }
`;
