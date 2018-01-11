import React from 'react';
import '../App.scss';
import { Menu, MenuText } from 'react-foundation';

const Nav = (props) => {
  return (
    <nav className='top-bar app-nav'>
      <Menu>
        <MenuText>Sample React App</MenuText>
      </Menu>
    </nav>
  );
};

export default Nav;
