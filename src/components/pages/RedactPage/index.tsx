import React from 'react';
import { NavLink } from 'react-router-dom';
import Map from 'react-map-gl';
import PageWrapper from '../../common/PageWrapper';
import style from './RedactPage.module.scss';

const RedactPage = () => (
  <PageWrapper>
    <div className={style.redact_main}>
      <div className={style.redact_header}>
        <form className={style.form_named}>
          <div className={style.form_named_main}>
            <img src="/images/А.png" alt="!" />
            <div>
              <p className={style.form_mainName}>
                <strong>Дмитрий Н.</strong>
              </p>
              <p>Админ-меню</p>
            </div>
          </div>
          <div>
            <button type="button" className={style.form_button}>
              <img src="/images/book-open.png" alt="img" />
              Объявления
            </button>
            <NavLink to="/admin" className={style.form_button_href}>
              <button type="button" className={style.form_button}>
                <img src="/images/external-link.png" alt="img" />
                Выход
              </button>
            </NavLink>
          </div>
        </form>
      </div>
      <div className={style.redact_content}>
        <div className={style.redact_back}>
          <NavLink to="/auth">
            <img src="/images/Arrow_back.png" alt="back" />
            <p>Вернуться назад</p>
          </NavLink>
        </div>
        <div>
          <form className={style.content_named}>
            <p>
              <strong>Чепчик</strong>
            </p>
            <button type="button">Сохранить</button>
          </form>
          <form className={style.content_redact}>
            <div className={style.content_redact_menu}>
              <p>Название товара</p>
              <input className={style.content_redact_menu_input1} />
            </div>
            <div className={style.content_redact_menu2}>
              <div>
                <p>Категория</p>
                <input className={style.content_redact_menu_input2} />
              </div>
              <div>
                <p>Стоимость</p>
                <input className={style.content_redact_menu_input2} />
              </div>
            </div>
            <div className={style.content_redact_menu}>
              <p>Телефон</p>
              <input className={style.content_redact_menu_input2} />
            </div>
            <div className={style.content_redact_menu}>
              <p>Описание</p>
              <textarea
                placeholder="Введите текст (до 3000 символов)"
                className={style.content_redact_menu_area}
              />
            </div>
            <div className={style.content_redact_menu}>
              <p>Фотография</p>
              <input className={style.content_redact_menu_input1} />
            </div>
            <div className={style.content_redact_menu}>
              <p>Местоположение</p>
              <input className={style.content_redact_menu_input1} placeholder="Введите адрес" />
              <Map
                initialViewState={{
                  longitude: -122.4,
                  latitude: 37.8,
                  zoom: 14,
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default RedactPage;
