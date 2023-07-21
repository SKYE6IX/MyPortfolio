import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBarContainer = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  gap: 0.8em;
  position: relative;
  z-index: 100;
`;

export const Navigation = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 300px;
  width: 200px;
`;

export const Sidebar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background: #e9ecef;
  border-radius: 0 0 10px 0;
`;

export const NavBarName = styled.h5`
  margin-left: 10px;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    transform: scale(1.1);
  }
  transition: transform ease-in-out 0.5s;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 15px;
    left: 10px;
  }
`;
export const NavBarRightSideWrapper = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  gap: 1em;
  align-items: center;
`;

// SIDEBAR VARIANTS
export const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
