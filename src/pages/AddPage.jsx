import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/api';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section className='add-page'>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}


export default AddPage;
