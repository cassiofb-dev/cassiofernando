import React, { useState } from 'react';

import themes from '../assets/js/themes';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

export default function Layout({ children }) {
  const [state, setState] = useState({
    lang: 'en',
    theme: 0,
  });

  const changeTheme = () => {
    const newState = {...state};
    newState.theme = (newState.theme + 1) % themes.length;
    setState(newState);
  };

  return (
    <div className={`theme-${themes[state.theme]}`}>
      <div className='theme-container'>
        <Header />

        <main>{children}</main>

        <div
          className='themed-button theme-picker'
          onClick={changeTheme}>
        </div>

        <Footer />
      </div>
    </div>
  )
}
