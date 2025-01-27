import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LocaleContext } from '../context/LocaleContext';
import PropTypes from 'prop-types';

function SearchBar({ title, keyword, keywordChange }) {
    const { locale } = React.useContext(LocaleContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div 
      className={`homepage-header ${isSearchOpen ? 'search-active' : ''}`}
    >
      <h2>{title}</h2>
      {isSearchOpen ? (
        <input
          type="text"
          placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Search by title...'}
          className="search-bar"
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
          onBlur={toggleSearch}
          autoFocus
        />
      ) : (
        <button onClick={toggleSearch} className='search-icon-button'>
          <IoSearchOutline size={24} />
        </button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
