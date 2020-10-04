import React from 'react';

import './certificates.scss';

import Certicate from '../templates/Certificate';
import SEO from '../components/SEO';

import certificates from '../assets/js/certificates';

export default function Certifcates() {
  return (
    <div className="certificates">
      <SEO title='Cassio Fernando | Certificates' />
      <div className='certificates-grid'>
        {certificates.map((x, y) => <Certicate certicate={x} key={y} />)}
      </div>
    </div>
  );
}
