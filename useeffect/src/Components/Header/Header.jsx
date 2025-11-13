import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/hello'}>Hello</Link>
        </li>
      </ul>
      {/* create simple pages as ui and create routes of these pages in app.jsx file
          also use Link and Navlink for navigation in header component */}
    </>
  );
}

export default Header;
