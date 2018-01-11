import React, { Component } from 'react';
import '../App.scss';
import { Colors } from 'react-foundation';

class RepoAdd extends Component {
  constructor() {
    super();

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();

    const formData = this.refs.name.value;
    console.log(formData);
    this.props.handleAdd(formData);

    this.refs.name.value = '';
  }

  render() {
     return (
     <form onSubmit={ this.onFormSubmit }>
      <label>Repo Name:
        <input ref="name" type="text" name="repo" />
      </label>
      <input type="submit" value="Submit" className="button"/>
     </form>
   );
  }
};

export default RepoAdd;
