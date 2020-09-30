import React, { useState } from 'react';
import { VscSymbolColor } from "react-icons/vsc";

import themes from '../assets/js/themes';

import Header from './Header';
import Footer from './Footer';

import './Layout.scss';

export default function Layout({ children }) {
  const [theme, setTheme] = useState(0);

  const changeTheme = () => setTheme((theme + 1) % themes.length);

  return (
    <div className={`theme-${themes[theme]}`}>
      <div className='theme-container'>
        <Header />

        <main>{children}</main>

        <div
          className='theme-picker'
          onClick={changeTheme}>
            <VscSymbolColor />
        </div>

        <Footer />
      </div>
    </div>
  )
}
