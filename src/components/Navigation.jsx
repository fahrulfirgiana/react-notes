import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHome, MdArchive } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Navigation({logout, name }) {
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
        <li><button onClick={logout}>{name}<FiLogOut /></button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navigation;