import React from 'react';
import style from './MainTitle.module.scss';

const MainTitle = () => (
  <div className={style.main}>
    <div className={style.main_title}>
      <h1>Доска объявлений</h1>
      <p>
        Находи тысячи разнообразных товаров и услуг
        <br />
        от продавцов со всей страны.
        <br />
        Безопасные расчеты. Удобный сервис доставки
      </p>
    </div>
    <img
      src="/images/closeup-of-colorful-gift-boxes-in-a-trolley_1-removebg-preview 1.png"
      alt="1"
    />
  </div>
);

export default MainTitle;
