import React from 'react';
import { AiOutlineMail , AiOutlineGithub, AiOutlineTwitter ,AiOutlineLinkedin } from 'react-icons/ai';

import './Footer.scss';

export default function Footer(){
  return (
    <footer>
      <hr/>
      <p>
        <a className='themed-link' href='mailto:cassiofb.souza@gmail.com'> <AiOutlineMail /> </a>
        <a className='themed-link' href='https://github.com/cassiofb-dev'> <AiOutlineGithub /> </a>
        <a className='themed-link' href='https://twitter.com/cassiofb_dev'> <AiOutlineTwitter /> </a>
        <a className='themed-link' href='https://www.linkedin.com/in/cassiofb-dev/'> <AiOutlineLinkedin /> </a>
      </p>
      <p>{new Date().getFullYear()} &copy; Cássio Fernando</p>
    </footer>
  );
}
