import React from 'react';

import './404.scss';

import notFound from '../assets/images/notFound.svg';

export default function NotFound() {
  return (
    <div className='not-found'>
      <img className='image' src={notFound} alt='404'/>
    </div>
  );
}
