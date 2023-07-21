import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
  /* margin-top: auto; */
  width: 100%;
  display: grid;
  gap: 12em;
  grid-template-columns: repeat(1, 35em 25em);
  justify-content: center;
  align-items: center;
`;

export const HomeTextArea = styled(motion.div)`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 3em;
    color: #1d314c;
  }
  p {
    font-family: 'Lato', sans-serif;
    font-size: 1.6em;
  }
`;
// .Homepage-text-area .darkModeH1 {
//   color: white;
// }

export const HomeIconsWrapper = styled.div`
  margin-top: 1.8;
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
    font-size: 1.5em;
  }
`;

export const HomeImageWrapper = styled(motion.div)`
  max-width: 80%;
  margin: 2.5em 2.5em 0;
`;

/* Small devices (landscape phones, 576px and up) */
// @media only screen and (min-width: 320px) and (max-width: 767px){
//   .Homepage-container {
//     grid-template-columns: repeat(1, 90%);
//     gap: 4em;
//   }
//   .Homepage-text-area h1 {
//     font-weight: 400;
//     font-size: 2.5em;
//   }
//   .Homepage-text-area p {
//     font-size: 1.3em;
//   }
//   .Homepage-links ul {
//     justify-content: center;
//     gap: 1.2em;
//   }
//   .Homepage-links .icon {
//     font-size: 1.3em;
//   }
//   .Homepage-img-area {
//     text-align: center;
//   }
//   .Homepage-img-area .self-img {
//     max-width: 79.1%;
//     margin: 2.5em 2.2em 0;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 991px) {
//   .Homepage-container {
//     grid-template-columns: repeat(1, 80%);
//     gap: 4em;
//   }
//   .Homepage-text-area h1 {
//     font-weight: 500;
//     font-size: 2.8em;
//   }
//   .Homepage-text-area p {
//     font-size: 1.4em;
//   }
//   .Homepage-links ul {
//     justify-content: center;
//   }
//   .Homepage-links .icon {
//     font-size: 1.8em;
//   }
//   .Homepage-img-area {
//     text-align: center;
//   }
//   .Homepage-img-area .self-img {
//     max-width: 80%;
//     margin: 2.5em 2.5em 0;
//   }
// }

// @media only screen and (min-width: 992px) and (max-width: 1200px){
//   .Homepage-container {
//     display: grid;
//     gap: 7em;
//     grid-template-columns: repeat(1, 32em 20em);
//   }
//   .Homepage-text-area h1 {
//     font-weight: 600;
//     font-size: 3em;
//   }
//   .Homepage-text-area p {
//     font-size: 1.5em;
//   }
//   .Homepage-img-area {
//     text-align: center;
//   }
//   .Homepage-img-area .self-img {
//     max-width: 75%;
//     margin: 2.5em 2.5em 0;
//   }
//  }

/* // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... } */
