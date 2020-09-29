import React from 'react';

import './certificates.scss';

import certificates from '../assets/data/certificates';
import Certicate from '../templates/Certificate';
import SEO from '../components/SEO';

export default function Certifcates() {
  return (
    <div className="certificates">
      <SEO title='Certificates' />
      <div className='certificates-grid'>
        {certificates.map((x, y) => <Certicate certicate={x} key={y} />)}
      </div>
    </div>
  );
}
