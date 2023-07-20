import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 30em);
  justify-content: center;
  gap: 9em;
  row-gap: 4em;
`;

export const ProjectWrapper = styled(motion.div)`
  max-width: 100%;
`;

export const ProjectTitle = styled.h2`
  text-transform: uppercase;
  font-family: 'Roboto' sans-serif;
  font-size: 1.2em;
`;

export const ProjectLanguageWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  li {
    padding: 1em;
    margin: 0.5em;
    font-size: 1.1em;
    border-radius: 45px;
    background: linear-gradient(45deg, #c1c1c1, #e5e5e5);
    box-shadow:
      5px -5px 10px #a3a3a3,
      -5px 5px 10px #ffffff;
  }
`;
// .Project-inner-container .Project-language .darkListMode {
//   background: #383737;
//   box-shadow: 39px 39px 56px #232222, -39px -39px 56px #4d4c4c;
// }

export const ProjectText = styled.div`
  height: 3.7em;
  font-family: 'Roboto' sans-serif;
  font-size: 1em;
  line-height: 1.2em;
`;

export const ProjectLinks = styled.div`
  margin-top: 1em;
  text-align: center;
  svg {
    font-size: 2em;
  }
`;

// .Project-link-btn .iconDarkMode{
//     color: #b7b7ac;
// }

// @media only screen and (min-width: 320px) and (max-width: 767px){
//   .Project-container {
//     display: grid;
//     grid-template-columns: repeat(1, 85%);
//     justify-content: center;
//     row-gap: 2em;
//   }
//   .Project-inner-container .Project-language li {
//     margin: 0.8em;
//     font-size: 0.7em
//   }
//   .Project-inner-container .Project-text {
//     /* height: 3.7em; */
//     font-size: .9em;
//     line-height: 1.1
//   }
//   .Project-link-btn .icon {
//     font-size: 1.5em;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 991px){
//   .Project-container {
//     display: grid;
//     grid-template-columns: repeat(2, 35%);
//     justify-content: center;
//     row-gap: 2em;
//   }
//   .Project-inner-container .Project-language li {
//     margin: 0.6em;
//     font-size: 0.7em;
//   }
//   .Project-inner-container .Project-text {
//     font-size: .95em;
//   }
//   .Project-inner-container .Project-link-btn {
//     margin-top: 3em;
//   }

//   .Project-link-btn .icon {
//     font-size: 1.7em;
//   }
// }

// @media only screen and (min-width: 992px) and (max-width: 1200px){
//   .Project-container {
//     display: grid;
//     grid-template-columns: repeat(2, 38%);
//     justify-content: center;
//     row-gap: 2em;
//   }
//   .Project-inner-container .Project-language li {
//     margin: 0.7em;
//     font-size: 0.9em
//   }
//   .Project-inner-container .Project-text {
//     font-size: .99em;
//   }
//   .Project-link-btn .icon {
//     font-size: 1.8em;
//   }
// }
