/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PageWrapper from '../../common/PageWrapper';
import style from './ProductPage.module.scss';

const CardPage = () => (
  <PageWrapper>
    <div className={style.wrapper_main}>
      <div className={style.main_product}>
        <div className={style.wrapper_back}>
          <NavLink to="/">
            <img src="/images/Arrow_back.png" alt="Назад" />
          </NavLink>
        </div>
        <div>
          <p>14 апреля 2022</p>
          <h2>Стиральная машинка Bosch</h2>
          <p>WS-25645-253-55</p>
        </div>
        <div className={style.main_views}>
          <img src="/images/CardViews.png" alt="Views" />
          <p>356</p>
        </div>
        <div className={style.slider}>
          <img src="/images/stiralka.png" alt="slider" />
        </div>
        <div>
          <p>
            <strong>Описание:</strong>
          </p>
          <p className={style.description}>
            Стиральная машина в отличном состянии, чистая, без накипи.
            <br />С машиной отдам новый шланг для подключения воды и упаковку средства против
            накипи.
          </p>
        </div>
        <div className={style.map}>
          <p>
            <strong>Местоположение: </strong>
            г. Кстово
          </p>
        </div>
      </div>
      <div className={style.card_another}>
        <div className={style.card_another_price}>
          <p>
            <strong>22 500 рублей</strong>
          </p>
          <button type="button"> Показать номер </button>
        </div>
        <p className={style.card_another_any}>Смотрите так же:</p>
        <div>
          <img src="/images/unsplash2.png" alt="Похожие объявления" />
          <p>Стиральная машинка</p>
          <p>Samsung</p>
        </div>
        <div>
          <img src="/images/unsplash1.png" alt="Похожие объявления" />
          <p>Стиральная машинка</p>
          <p>Indesit</p>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default CardPage;
