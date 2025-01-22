import React from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import {
  deleteNote,
  getNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
  }

  archiveHandler() {
    const { note } = this.state;
    if (note.archived) {
      unarchiveNote(this.props.id);
    } else {
      archiveNote(this.props.id);
    }
    this.props.navigate("/");
  }

  deleteHandler() {
    deleteNote(this.props.id);
    this.props.navigate("/");
  }

  render() {
    const { note } = this.state;

    if (note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...note} />
        <div className="fab-2-container">
          <button
            className="fab fab-archive"
            aria-label="archive"
            onClick={this.archiveHandler}
          >
            {note.archived ? <MdUnarchive size={22}/> : <MdArchive size={28}/>}
          </button>
          <button
            className="fab fab-delete"
            aria-label="delete"
            onClick={this.deleteHandler}
          >
            <FaTrashAlt size={22}/>
          </button>
        </div>
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;