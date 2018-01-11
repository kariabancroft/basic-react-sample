import React from 'react';
import '../App.scss';
import { Callout } from 'react-foundation';
import RepoAdd from './repo_add';

const Repos = (props) => {
   return (
     <div className='repos'>
      <Callout>
        <p>REPOS</p>
        <ul>
          { props.repos.map((repo, index) => {
            return (
              <li key={index}>
                { repo }
              </li>
            )
          })}
        </ul>
      </Callout>

      <RepoAdd handleAdd={ props.handleAdd } />
     </div>
   );
};

export default Repos;
