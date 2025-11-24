import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/dashboard'}>Dashboard</Link>
        </li>
        <li>
          <Link to={'/user'}>User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
