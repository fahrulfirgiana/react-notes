import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: '',
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const note = this.state.notes.filter((notes) => {
      return notes.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className='homepage'>
        <div className='homepage-header'>
          <h2>Catatan Aktif</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </div>
        <NoteList notes={note} />

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
}

export default HomePage;