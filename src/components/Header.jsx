import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

import logo from '../assets/images/cassio.svg';

export default function Header() {
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
