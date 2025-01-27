import React, { useState, useRef, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import { ThemeContext } from "../context/ThemeContext";
import { LocaleContext } from "../context/LocaleContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import PropTypes from "prop-types";

function Navbar({
  title,
  logout,
  name,
  keyword,
  keywordChange,
  showSearch = true,
  showLogout = true,
  showName = true,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="flex justify-between items-center py-3 bg-surface px-1">
      <h2 className="text-xl text-on-background">{title}</h2>
      <div className="flex items-center gap-6">
        {showSearch && (
          <SearchBar keyword={keyword} keywordChange={keywordChange} />
        )}
        <div className="user-menu-wrap relative" ref={dropdownRef}>
          <a
            href="#"
            className="mini-photo-wrapper flex items-center"
            onClick={toggleDropdown}
          >
            <img
              className="mini-photo"
              src="https://static.vecteezy.com/system/resources/previews/004/511/281/original/default-avatar-photo-placeholder-profile-picture-vector.jpg"
              width="36"
              height="36"
              alt="Profile"
            />
          </a>
          {isDropdownOpen && (
            <div className="menu-container active">
              <ul className="user-menu">
                {showName && (
                  <div className="profile-highlight">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/511/281/original/default-avatar-photo-placeholder-profile-picture-vector.jpg"
                      alt="profile-img"
                      width="36"
                      height="36"
                      className="rounded-full"
                    />
                    <div className="details">
                      <div id="profile-name">{name || "User"}</div>
                      <div id="profile-footer">Team Hallaway</div>
                    </div>
                  </div>
                )}

                <li className="user-menu__item">
                  <button onClick={toggleTheme} className="user-menu-link">
                    <span className="icon-theme">
                      {theme === "light" ? (
                        <MdDarkMode size={22} className="theme-icon" />
                      ) : (
                        <MdLightMode size={22} className="theme-icon" />
                      )}
                    </span>
                    <span className="theme-text">
                      {locale === "id" ? "Ganti Tema" : "Change Theme"}{" "}
                      {theme === "light" ? "Dark" : "Light"}
                    </span>
                  </button>
                </li>
                <li className="user-menu__item">
                  <button onClick={toggleLocale} className="user-menu-link">
                    <IoLanguage size={22} className="theme-icon" />{" "}
                    {locale === "id" ? "Indonesia" : "English"}
                  </button>
                </li>
                {showLogout && (
                  <div className="footer">
                    <li className="user-menu__item">
                      <button className="user-menu-link" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  keyword: PropTypes.string,
  showSearch: PropTypes.bool,
  showLogout: PropTypes.bool,
  showName: PropTypes.bool,
};

export default Navbar;
