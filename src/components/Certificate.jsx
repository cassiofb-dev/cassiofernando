import React from 'react';

import './Certificate.scss';

export default function Certicate({certicate}) {
  return(
    <div className='certificate-tile'>
      <a className='themed-link' href={certicate.credential}>
        <h2>{certicate.title}</h2>
      </a>
      <hr/>
      <h4>By: {certicate.organization}</h4>
    </div>
  );
}
