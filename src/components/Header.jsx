import React from 'react';
import { Link } from 'gatsby';

import './Header.scss';

import logo from '../assets/images/cassio.svg';

export default function Header() {
  return (
    <header className='header'>
      <nav className='themed-navbar'><ul>
        <li className='themed-navitem'><Link to='/'><img className='logo' src={logo} alt='logo'/></Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/skills/'>Skills</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/projects/'>Projects</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/certificates/'>Certificates</Link></li>
        <li className='themed-navitem'><Link className='themed-link' to='/blog/'>Blog</Link></li>
      </ul></nav>
    </header>
  );
}
