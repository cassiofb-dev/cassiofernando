import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import themes from '../assets/js/themes';

import Header from './Header';
import Footer from './Footer';

import favicon from '../assets/images/favicons/light.png';

import './Layout.scss';

export default function Layout({ children }) {
  const [theme, setTheme] = useState(0);

  const changeTheme = () => setTheme((theme + 1) % themes.length);

  return (
    <div className={`theme-${themes[theme]}`}>
      <div className='theme-container'>
        <Helmet>
            <title>Cassio Fernando | Computer Scientist</title>
            <meta name='description' content='Cassio Fernando personal website' />
            <link rel='icon' href={favicon} type='image/png' />
            <base target='_blank' rel='noreferrer noopener'></base>
        </Helmet>
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
