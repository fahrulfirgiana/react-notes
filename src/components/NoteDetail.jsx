import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

function NoteDetail({ title, createdAt, body }) {
  return (
    <div className='note-detail'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
};

export default NoteDetail;
