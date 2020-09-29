import React from 'react';

import './Project.scss';

export default function Project({project}) {
  return (
    <div className='project-tile'>
      <a className='themed-link' href={project.url}>
        <h2>{project.title}</h2>
      </a>
      <hr/>
      <h4>Description</h4>
      <p>{project.description}</p>
      <hr/>
      <h4>Stacks</h4>
      <p className='stacks'>{project.stacks.join(', ')}</p>
    </div>
  );
}
