import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled(motion.div)`
  height: 80%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.article`
  width: 50%;
  padding: 3em 5em;
`;

export const AboutTitle = styled(motion.h2)`
  font-family: 'Open Sans', sans-serif;
  font-size: 3em;
  font-weight: 500;
  color: #1d314c;
  margin-bottom: 0;
`;
// .About .darkTitle {
//   color: white;
// }

export const AboutText = styled(motion.p)`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 1.3em;
`;

export const AboutSkillsWrapper = styled(motion.div)`
  width: 55%;
  padding-left: 4.4em;
  li {
    list-style: none;
    font-size: 1rem;
    line-height: 1.3em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  h2 {
    color: #1d314c;
  }
`;
// .darkH2 h2 {
//   color: white;
// }
export const AboutSkillsColumn = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 20%);
    gap: 2%;
    padding-left: 0;
  }
`;

// @media only screen and (min-width: 320px) and (max-width: 767px) {
//   .About {
//     width: 80%;
//     padding: 1em 3em;
//   }
//   .About .About-title {
//     font-weight: 500;
//     font-size: 2em;
//   }
//   .About .About-text {
//     font-size: 1.019em;
//     text-align: justify;
//   }
//   .About-skills {
//     width: 80%;
//     padding-left: 0.5em;
//   }
//   .columns ul {
//     display: block;
//   }
//   .About-skills li {
//     padding: 0.4em 0;
//     font-size: 1.1rem;
//     line-height: 1.1em;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 991px) {
//   .About {
//     width: 80%;
//     padding: 1em 3em;
//   }
//   .About .About-text {
//     font-size: 1.2em;
//     text-align: justify;
//   }
//   .About-skills {
//     width: 80%;
//     padding-left: 0.5em;
//   }
// }

// @media only screen and (min-width: 992px) and (max-width: 1200px) {
//   .About {
//     width: 70%;
//     padding: 1em 3em;
//   }
//   .About-skills {
//     width: 70%;
//     padding-left: 0.5em;
//   }
// }
