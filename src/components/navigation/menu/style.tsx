import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuLists = styled(motion.ul)`
  display: flex;
  gap: 1em;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 25px;
    position: absolute;
    top: 90px;
  }
`;

export const Menu = styled(motion.li)`
  list-style: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.2rem;
`;

// VARIANTS
export const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const listVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
