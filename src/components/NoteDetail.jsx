import React, { useContext } from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import { LocaleContext } from "../context/LocaleContext";


function NoteDetail({ title, createdAt, body }) {
  const { locale } = useContext(LocaleContext); 

  return (
    <div className='note-detail'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt, locale)}</p>
      <p className='note-detail__body'>{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
