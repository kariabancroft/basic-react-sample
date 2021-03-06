import React from 'react';
import '../App.scss';
import { Callout } from 'react-foundation';
import NoteAdd from './note_add';

 const Notes = (props) => {
   console.log(props);
   return (
     <div>
      <Callout>
        <h4>Notes</h4>
        <ul>
          { props.notes.map((note, index) => {
            return (
              <li key={index}>
                { note }
              </li>
            )
          })}
        </ul>
        </Callout>
        <NoteAdd handleAdd={ props.handleAdd }/>
     </div>
   );
};

export default Notes;
