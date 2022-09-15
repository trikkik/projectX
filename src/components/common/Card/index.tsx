import React, { ReactNode } from 'react';
import style from './Card.module.scss';

type CardPropsType = {
  id: number;
  images: ReactNode;
  title: string;
  disTitle: ReactNode;
  date: string;
  price: string;
  views: ReactNode;
};
const Card = ({ id, images, title, disTitle, date, price, views }: CardPropsType) => (
  <form className={style.form_main}>
    {images}
    <h5 className={style.form_title}>{title}</h5>
    <p className={style.form_distitle}>{disTitle}</p>
    <p className={style.form_price}>{price}</p>
    <div className={style.form_unMain}>
      <p>{date}</p>
      <div>{views}</div>
    </div>
  </form>
);

export default Card;
