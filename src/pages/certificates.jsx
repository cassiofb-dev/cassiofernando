import React from 'react';

import './certificates.scss';

import certificates from '../assets/data/certificates.json';
import Certicate from '../components/Certificate';

export default function Certifcates() {
  return (
    <div className='certificates-grid'>
      {certificates.map((x, y) => <Certicate certicate={x} key={y} />)}
    </div>
  );
}
