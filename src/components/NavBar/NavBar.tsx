import * as React from 'react';
import './NavBar.css';

export interface NavBarItem {
  displayText: string;
  onClick: () => void;
}

export interface NavBarProps {
  navItems: NavBarItem[];
}

const NavBar = (props: NavBarProps) => {
  const listItems = props.navItems.map((navItem, index) => {
    return (
      <li key={index}>
        <a className="nav-bar--list-item" href="#">{navItem.displayText}</a>
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