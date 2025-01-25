import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/api'; 
import PropTypes from 'prop-types';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { error, data } = await getNote(id);  
        if (error) {
          setError('Note not found');
        } else {
          setNote(data);
        }
      } catch (err) {
        setError('Failed to load note');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const archiveHandler = async () => {
    try {
      if (note.archived) {
        await unarchiveNote(id);
      } else {
        await archiveNote(id);
      }
      navigate('/');
    } catch (error) {
      console.error('Failed to archive/unarchive note');
    }
  };
  
  const deleteHandler = async () => {
    try {
      await deleteNote(id);
      navigate('/');
    } catch (error) {
      console.error('Failed to delete note');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!note) {
    return <p>Note is not found!</p>;
  }

  return (
    <section>
      <NoteDetail {...note} />
      <div className="fab-2-container">
        <button
          className="fab fab-archive"
          aria-label="archive"
          onClick={archiveHandler}
        >
          {note.archived ? <MdUnarchive size={22} /> : <MdArchive size={28} />}
        </button>
        <button
          className="fab fab-delete"
          aria-label="delete"
          onClick={deleteHandler}
        >
          <FaTrashAlt size={22} />
        </button>
      </div>
    </section>
  );
}



export default DetailPage;
