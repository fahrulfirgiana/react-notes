import React from 'react';
import { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/api';

function ArsipPage() {
  const [noteArchived, setNoteArchived] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getArchivedNotes();  
        if (error) {
          setError('Note not found');
        } else {
          setNoteArchived(data);
        }
      } catch (err) {
        setError('Failed to load note');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, []);

    const filteredNotes = noteArchived.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    const onKeywordChangeHandler = (newKeyword) => {
      setKeyword(newKeyword); 
    };

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!noteArchived) {
      return <p>Note is not found!</p>;
    }

    return (
      <section className='homepage'>
        <div className='homepage-header'>
          <h2>Catatan Arsip</h2>
          <SearchBar
            keyword={keyword}
            keywordChange={onKeywordChangeHandler}
          />
        </div>
        <NoteList notes={filteredNotes} />
      </section>
    );
  }

export default ArsipPage;
