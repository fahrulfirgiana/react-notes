import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { LocaleContext } from "../context/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null); // Referensi untuk elemen search

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Fungsi untuk menangani klik di luar elemen search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false); // Tutup search jika klik di luar elemen search
      }
    }

    // Tambahkan event listener saat search terbuka
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Hapus event listener saat search ditutup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div 
      ref={searchRef} // Tambahkan ref di container utama
      className={`homepage-header ${isSearchOpen ? "search-active" : ""}`}
    >
      {isSearchOpen ? (
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
            placeholder={locale === "id" ? "Cari berdasarkan judul..." : "Search by title..."}
          />
        </InputGroup>
      ) : (
        <button onClick={toggleSearch} className="search-icon-button">
          <IoSearchOutline size={24} />
        </button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
