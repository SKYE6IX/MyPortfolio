import React, { useContext, useRef } from 'react';
import { useCycle } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context/theme.context';
import SwitchTheme from './Switch';
import MenuItem from '../menu/MenuItems';
import MenuToggle from '../menu/MenuToggle';
import useWindowSize from '../../../hooks/useWindowSize';
import me from './me.webp';
import {
  NavBarContainer,
  NavBarName,
  NavBarRightSideWrapper,
  Navigation,
  Sidebar,
  sidebarVariants,
} from './style';

const NavBar = () => {
  const navRef = useRef(null);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { windowWidth } = useWindowSize();

  const handleCloseNav = () => {
    isOpen && toggleOpen();
  };
  return (
    <NavBarContainer>
      {windowWidth < 769 && (
        <Navigation
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          ref={navRef}
        >
          <Sidebar $isDarkMode={isDarkMode} variants={sidebarVariants} />
          {isOpen && (
            <NavBarName $isDarkMode={isDarkMode}>
              <NavLink to="/" onClick={handleCloseNav}>
                skye
              </NavLink>
            </NavBarName>
          )}
          <MenuItem
            handleCloseNav={handleCloseNav}
            isOpen={isOpen}
            isDarkMode={isDarkMode}
          />
          <MenuToggle toggle={() => toggleOpen()} />
        </Navigation>
      )}

      {windowWidth > 768 && (
        <>
          <NavBarName $isDarkMode={isDarkMode}>
            <NavLink to="/">skye</NavLink>
          </NavBarName>
          <MenuItem isDarkMode={isDarkMode} />
        </>
      )}
      <NavBarRightSideWrapper>
        <SwitchTheme checked={isDarkMode} onChange={toggleDarkMode} />
        <NavLink to="/about">
          <Avatar src={me} alt="Azeez_Picture" />
        </NavLink>
      </NavBarRightSideWrapper>
    </NavBarContainer>
  );
};
export default NavBar;
