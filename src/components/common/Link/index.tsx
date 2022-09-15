import React from 'react';
import style from './Link.module.scss';

type LinkPropsType = {
  title: string;
};

const Link = ({ title }: LinkPropsType) => (
  <div className={style.link}>
    <button type="button">
      <img src="/images/profile.svg" alt="Profile pic" />
      <p>{title}</p>
    </button>
  </div>
);

export default Link;
