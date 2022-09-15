import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AdminPage.module.scss';
import PageWrapper from '../../common/PageWrapper';

const AdminPage = () => (
  <PageWrapper>
    <div className={style.admin_main}>
      <div className={style.admin_header}>
        <form className={style.form_named}>
          <div className={style.form_named_main}>
            <img src="/images/А.png" alt="!" />
            <div>
              <p className={style.form_mainName}>
                <strong>Super Admin</strong>
              </p>
              <p>Админ-меню</p>
            </div>
          </div>
          <div>
            <button type="button" className={style.form_button}>
              <img src="/images/book-open.png" alt="img" />
              Объявления
            </button>
            <NavLink to="/admin">
              <button type="button" className={style.form_button}>
                <img src="/images/external-link.png" alt="img" />
                Выход
              </button>
            </NavLink>
          </div>
        </form>
      </div>
      <div className={style.admin_content}>
        <div className={style.admin_content_header}>
          <div className={style.admin_content_header_named}>
            <p className={style.admin_content_header_named_it}>
              <strong>Объявления</strong>
            </p>
            <p>Всего: 45</p>
          </div>
          <button type="button" className={style.admin_content_header_button}>
            Добавить +
          </button>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default AdminPage;
