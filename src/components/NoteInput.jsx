import React from 'react';
import PropTypes from 'prop-types';
import { FaPaperPlane } from 'react-icons/fa'; // Ganti dengan React Icons

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input
          type='text'
          className='title__'
          placeholder='Catatan Rahasia'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type='text'
          className='body__'
          placeholder='Sebenarnya saya adalah'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type='submit' className='submit-btn'>
          <FaPaperPlane style={{ fontSize: '18px', marginRight: '8px' }} /> Tambah
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
