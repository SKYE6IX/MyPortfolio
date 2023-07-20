import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled(motion.div)`
  margin-top: auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactText = styled.section`
  width: 40%;
  text-align: center;
  padding: 2.5em;
  border-radius: 20px;
  background: #ebebeb;
  box-shadow:
    39px 39px 78px #a5a5a5,
    -39px -39px 78px #dbdbdb;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
  }
`;

export const ContactMail = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4em;
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 3px solid grey;
  }
`;
// .Contact-msg .mailDarkMode {
//   color: white;
// }

export const ContactIconsWrapper = styled.div`
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
  }
`;
// .Contact-links .darkModeIcon {
//   color: #b7b7ac;
// }

// @media only screen and (min-width: 320px) and (max-width: 767px) {
//   .Contact-msg {
//     width: 70%;
//   }
//   .Contact-msg .msg {
//     font-size: 1.2em;
//   }
//   .Contact-msg .mail {
//     font-size: 1.2em;
//   }
//   .Contact-links .icon {
//     font-size: 2em;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 991px){
//   .Contact-msg {
//     width: 50%;
//   }
//   .Contact-links .icon {
//     font-size: 2em;
//   }
// }
