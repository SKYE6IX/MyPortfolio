import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ScrollBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: #1d314c;
  transform-origin: 0%;
`;

export const TextWrapper = styled.article`
  width: 50%;
  @media only screen and (min-width: 320px) and (max-width: 1200px) {
    width: 80%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 70%;
  }
`;

export const AboutTitle = styled(motion.h2)`
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  font-weight: 500;
  color: #1d314c;
  margin-bottom: 0;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 2rem;
  }
`;
// .About .darkTitle {
//   color: white;
// }

export const AboutText = styled(motion.p)`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const AboutSkillsWrapper = styled(motion.div)`
  width: 50%;
  h2 {
    color: #1d314c;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 80%;
    h2 {
      font-size: 1rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 80%;
    h2 {
      font-size: 1.3rem;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1500px) {
    width: 70%;
  }
`;
// .darkH2 h2 {
//   color: white;
// }
export const AboutSkillsColumn = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 24%);
    gap: 2%;
    padding-left: 0;
  }
  li {
    list-style: none;
    font-size: 1rem;
    line-height: 1.3em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }
    li {
      font-size: 0.9rem;
      line-height: 1.1em;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(4, 24%);
  }
`;

//variant for framer motion
export const containerVariant = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
export const itemVariant = {
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
