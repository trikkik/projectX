import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../common/Card';
import MainTitle from '../../common/MainTitle';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

const MainPage = () => (
  <PageWrapper>
    <div className={style.main_wrapper}>
      <MainTitle />
      <div className={style.main_button}>
        <button type="button" className={style.main_button_all}>
          Вся доска
        </button>
        <button type="button">Автомобили</button>
        <button type="button">Аксессуары</button>
        <button type="button">Мебель</button>
        <button type="button">Одежда</button>
        <button type="button">Спорт</button>
        <button type="button">Техника</button>
        <button type="button">Товары для дома</button>
      </div>
      <h2>Вся лента</h2>
      <div className={style.cards}>
        <NavLink to="/card">
          <Card
            title="Стиральная машина Bosch"
            disTitle={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <p>
                Машина в хорошем состоянии.
                <br />
                Возможен разумный торг
              </p>
            }
            price="22 500 P"
            id={0}
            images={<img src="/images/stiralka.png" alt="images" />}
            date="14 апреля 2021"
            views={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <>
                <img src="/images/CardViews.png" alt="Views" />
                <p>356</p>
              </>
            }
          />
        </NavLink>
        <Card
          title="Шапочка"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Шапочка детская на ребенка 7-10 лет.
              <br />
              60% шерст, 40% вискоза
            </p>
          }
          price="500 P"
          id={0}
          images={<img src="/images/hat.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Толстовка"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Новая толстовка белая без принта
              <br />
              с_карманом
            </p>
          }
          price="2 000 P"
          id={0}
          images={<img src="/images/hoode.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Велосипед"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Велосипед в отличном состоянии.
              <br />
              Ретро-стиль
            </p>
          }
          price="28 000 P"
          id={0}
          images={<img src="/images/bike.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Наушники"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Наушники почти новые.
              <br />
              Срок эксплуатации - меньше месяца
            </p>
          }
          price="4 500 P"
          id={0}
          images={<img src="/images/headphones.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Кофемашина"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Кофемашина с капучинатором.
              <br />
              Пакет кофе 1 кг. - в подарок
            </p>
          }
          price="8 500 P"
          id={0}
          images={<img src="/images/cofe.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Сумка женская"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Итальянска сумка из натуральной кожи
              <br />
              Качественная фурнитура, состояние новой
            </p>
          }
          price="7 500 P"
          id={0}
          images={<img src="/images/bag.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Ботинки зимние мужские"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Ботинки почти новые, качественные, теплые.
              <br />
              Носили 2 недели
            </p>
          }
          price="8 000 P"
          id={0}
          images={<img src="/images/botinki.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
        <Card
          title="Доска для сноубординга"
          disTitle={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p>
              Качественная красивая доска
              <br />
              с_креплениями
            </p>
          }
          price="43 000 P"
          id={0}
          images={<img src="/images/doska.png" alt="images" />}
          date="14 апреля 2021"
          views={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <img src="/images/CardViews.png" alt="Views" />
              <p>356</p>
            </>
          }
        />
      </div>
      <div className={style.button_upload}>
        <button type="button" className={style.button_more}>
          <img src="/images/moreButton.png" alt="!" />
          Загрузить ещё
        </button>
      </div>
    </div>
  </PageWrapper>
);

export default MainPage;
