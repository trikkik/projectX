import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Input';
import Link from '../Link';
import Logo from '../Logo';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <Logo />
    <div className={style.header_search}>
      <input />
      <button type="button">Искать</button>
    </div>
    <div className={style.header_submit}>
      <button type="button" className={style.button}>
        Подать объявление
      </button>
    </div>
    <div className={style.header_enter}>
      <NavLink to="/auth">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link title="Войти" />
      </NavLink>
    </div>
  </header>
);

export default Header;
