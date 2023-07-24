import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuLists, menuVariants, listVariants } from './style';
import useWindowSize from '../../../hooks/useWindowSize';

const menuLists = ['project', 'contact', 'about'];

type MenuItemProps = {
  handleCloseNav?: () => void;
  isOpen?: boolean;
};
const MenuItem = ({ handleCloseNav, isOpen }: MenuItemProps) => {
  const { windowWidth } = useWindowSize();
  return (
    <MenuLists variants={menuVariants}>
      {menuLists.map((list, i) => (
        <NavLink
          to={`/${list}`}
          onClick={handleCloseNav}
          key={i}
          style={{
            pointerEvents: isOpen || windowWidth > 768 ? 'auto' : 'none',
          }}
        >
          <Menu
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={listVariants}
          >
            {list}
          </Menu>
        </NavLink>
      ))}
    </MenuLists>
  );
};

export default MenuItem;
