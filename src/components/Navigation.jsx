import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHome, MdArchive } from 'react-icons/md';

function Navigation() {
  const location = useLocation();

  return (
    <nav className='sidebar'>
      <div className='sidebar-header'>
        <h1>NoteApp</h1>
      </div>
      <ul className='sidebar-menu'>
        <li>
          <Link 
            to='/' 
            className={location.pathname === '/' ? 'active' : ''}
          >
            <MdHome /> 
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='/arsip'
            className={location.pathname === '/arsip' ? 'active' : ''}
          >
            <MdArchive /> 
            Arsip
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;