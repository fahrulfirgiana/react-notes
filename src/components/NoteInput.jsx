import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa'; 
import { LocaleContext } from "../context/LocaleContext";
import content from '../utils/content';  

function NoteInput({ addNote }) {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChangeEventHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <form className='contact-input' onSubmit={onSubmitEventHandler}>
      <input
        type='text'
        className='title__'
        placeholder={content.noteInput[locale].titlePlaceholder}
        value={title}
        onChange={onTitleChangeEventHandler}
      />
      <input
        type='text'
        className='body__'
        placeholder={content.noteInput[locale].bodyPlaceholder}
        value={body}
        onChange={onBodyChangeEventHandler}
      />
      <button type='submit' className='submit-btn'>
        <FaPaperPlane style={{ fontSize: '18px', marginRight: '8px' }} />
        {content.noteInput[locale].addButton}
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
