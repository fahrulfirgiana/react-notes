import React from "react";
import { MdArchive, MdHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { LocaleContext } from "../context/LocaleContext";

function Navigation() {
  const location = useLocation();
  const { locale } = React.useContext(LocaleContext);
  

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <p className="title-app">NoteApp</p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <MdHome />
            {locale === 'id' ? 'Beranda' : 'Home'}
          </Link>
        </li>
        <li>
          <Link
            to="/arsip"
            className={location.pathname === "/arsip" ? "active" : ""}
          >
            <MdArchive />
            {locale === 'id' ? 'Arsip' : 'Archive'}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
