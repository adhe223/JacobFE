import * as React from 'react';
import { Page } from '../../constants';
import './NavBar.css';

export interface NavBarProps {
  navItems: string[];
  setPage: (page: Page) => void;
}

const NavBar = (props: NavBarProps) => {
  const listItems = props.navItems.map((navItem, index) => {

    const onNavClick = () => {
      props.setPage(Page[navItem]);
    };

    return (
      <li key={index}>
        <a className="nav-bar--list-item" onClick={onNavClick} href="#">{navItem}</a>
      </li>
    );
  });

  return (
    <ul className="nav-bar">
      {listItems}
    </ul>
  );
};

export default NavBar;