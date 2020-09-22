import React, { useState } from 'react';
import { Link } from 'gatsby';

import './Header.scss';

import logo from '../assets/images/cassio.svg';

export default function Header() {
  const [state, setState] = useState({
    pos: window.pageYOffset,
    style: {top: '0'},
  });

  window.onscroll = () => {
    const newState = {...state};
    const newPos = window.pageYOffset;

    newState.pos > newPos ? newState.style = {top: '0'} : newState.style = {top: '-5rem'};
    newState.pos = newPos;

    setState(newState);
  };

  return (
    <header className='header' style={state.style}>
      <nav className='themed-navbar'><ul>
        <li className='themed-navitem'><Link to='/'><img className='logo' src={logo} alt='logo'/></Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/skills/'>skills</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/projects/'>projects</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/certificates/'>certificates</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/blog/'>blog</Link></li>
      </ul></nav>
    </header>
  );
}
