import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import { LocaleContext } from "../context/LocaleContext";

function NoteItem({ id, title, createdAt, body }) {
  const { locale } = useContext(LocaleContext); 

  return (
    <article className='note-item'>
      <h3 className='note-item__title'>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className='note-item__date'>{showFormattedDate(createdAt, locale)}</p> 
      <p className='note-item__body'>{body}</p>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
