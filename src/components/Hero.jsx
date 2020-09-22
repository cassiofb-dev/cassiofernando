import React from 'react';

import './Hero.scss';

import proudCoder from '../assets/images/proudCoder.svg';

export default function Hero() {
  return (
    <section className='hero'>
      <div>
        <h2 className='subtitle'>Hello Everyone!<br/>My name is</h2>
        <h1 className='title'>Cássio Fernando</h1>
        <h2 className='subtitle'>I'm a <span className='role'>Computer Scientist</span> 👨‍🔬<br/>based on Brazil</h2>
      </div>
      <img className='proud-coder' src={proudCoder} alt='You expected an alt but it was me DIO!'/>
    </section>
  );
}
