import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState('');

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
  };

  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className='homepage'>
      <div className='homepage-header'>
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={keyword}
          keywordChange={onKeywordChangeHandler}
        />
      </div>
      <NoteList notes={filteredNotes} />

      <Link to='/add-note'>
        <button
          className='fab'
          aria-label='add'
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '20px',
            borderRadius: '12px',
          }}
        >
          <FiPlus size={32} color="white" />
        </button>
      </Link>
    </section>
  );
}

export default HomePage;