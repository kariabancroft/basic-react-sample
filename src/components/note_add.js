import React, { Component } from 'react';
import '../App.scss';
// import { Button } from 'react-foundation';

class NoteAdd extends Component {
  constructor() {
    super();

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();

    const formData = this.refs.note.value;
    console.log(formData);
    this.props.handleAdd(formData);

    this.refs.note.value = '';
  }

  render() {
     return (
     <form onSubmit={ this.onFormSubmit }>
      <label>Note Text:
        <input ref="note" type="text" name="repo" />
      </label>
      <input type="submit" value="Submit" className="button" />
     </form>
   );
  }
};

export default NoteAdd;
