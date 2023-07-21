import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuLists, menuVariants, listVariants } from './style';

const menuLists = ['project', 'contact', 'about'];

type MenuItemProps = {
  handleCloseNav?: () => void;
};
const MenuItem = ({ handleCloseNav }: MenuItemProps) => {
  return (
    <MenuLists variants={menuVariants}>
      {menuLists.map((list, i) => (
        <NavLink to={`/${list}`} onClick={handleCloseNav}>
          <Menu
            key={i}
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
