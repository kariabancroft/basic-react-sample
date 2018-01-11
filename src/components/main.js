import React, { Component } from 'react';
import '../App.scss';
import Notes from './notes';
import Repos from './repos';
import Dashboard from './dashboard';
import { Row, Column } from 'react-foundation';

class Main extends Component {
  constructor(){
    super();

    this.state = {
      notes: [1,2,3],
      bio: {
        name: 'Tester Person'
      },
      repos: ['a', 'b', 'c']
    }

    this.addRepo = this.addRepo.bind(this);
    this.addNote = this.addNote.bind(this);
    this.totalItems = this.totalItems.bind(this);
  }

  addRepo(repoName){
    console.log('Add a repo!');
    console.log(repoName);

    this.setState({
      repos: this.state.repos.concat([repoName])
    });
  }

  addNote(noteText) {
    this.setState({
      notes: this.state.notes.concat([noteText])
    });
  }

  totalItems() {
    return this.state.notes.length + this.state.repos.length;
  }

  render() {
    // console.log(this.state.repos);
    // console.log(this.state.notes);
    return (
      <div>
        <Dashboard items={this.totalItems()}/>
        <Row>
          <Column>
              <div>
                <Repos repos={this.state.repos}
                  handleAdd={this.addRepo}/>
              </div>
            </Column>
            <Column>
              <div>
                <Notes notes={this.state.notes}
                  handleAdd={this.addNote}/>
              </div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Main;
