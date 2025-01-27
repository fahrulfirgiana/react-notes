import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import NoteList from '../components/NoteList';
import Navbar from '../components/Navbar';
import { getActiveNotes } from '../utils/api';
import content from '../utils/content';
import { LocaleContext } from '../context/LocaleContext';
import Loading from "../components/Loading";
import PropTypes from 'prop-types';


function HomePage({name, logout}) {
  const { locale } = React.useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const result = await getActiveNotes();
        if (!result.error) {
          setNotes(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch notes:', error);
        setIsLoading(false);
      }
    }

    fetchNotes();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
  };

  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className='homepage'>
      <Navbar
        title={content.home[locale].header}
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
        name={name}
        logout={logout}
      />
      
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

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HomePage;