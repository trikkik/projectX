import React, { ReactElement, ReactNode, useState } from 'react';
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  distTitle: string;
  children: ReactNode;
  secondRef: ReactNode;
  passText: ReactNode;
  button: ReactNode;
};
const Forms = ({ title, distTitle, children, secondRef, passText, button }: FormPropsType) => (
  <form className={style.form}>
    <h4>{title}</h4>
    <p>{distTitle}</p>
    <div className={style.reuf_button}>
      <Button>
        <NavLink to="/reg">Регистрация</NavLink>
      </Button>
      <Button>
        <NavLink to="/auth">Авторизация</NavLink>
      </Button>
    </div>
    <div className={style.input}>
      <div className={style.input_main}>{children}</div>
    </div>
    <div className={style.form_footer}>
      {secondRef}
      {button}
      {passText}
    </div>
  </form>
);

export default Forms;
