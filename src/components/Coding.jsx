import React from 'react';

import './Coding.scss';

import coding from '../assets/images/coding.svg';

export default function Coding() {
  return (
    <div className='coding'>
      <h2>I'm coding it!</h2>
      <img src={coding} alt='coding' className='image'/>
    </div>
  );
}
