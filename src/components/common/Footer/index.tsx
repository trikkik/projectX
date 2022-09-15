import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer_name}>
      <Logo />
      <p>Доска объявлений</p>
    </div>
    <div className={style.footer_q}>
      <NavLink to="/error">
        <p>© ООО «Доска диджитал», 2022</p>
      </NavLink>
    </div>
  </footer>
);

export default Footer;
