import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
};
const Button = ({ title }: ButtonPropsType) => (
  <button className={style.wrapper} type="button">
    {title}
  </button>
);

export default Button;
