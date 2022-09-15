import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import style from './ErrorPage.module.scss';

const ErrorPage = () => (
  <PageWrapper>
    <div className={style.wrapper}>
      <div>
        <h3>Упс! Кажется, на эту страницу прилег котик</h3>
        <p className={style.error}>Ошибка 404</p>
        <p>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
      </div>
      <img src="/images/purr-page-not-found 1.png" alt="kitty" />
    </div>
  </PageWrapper>
);

export default ErrorPage;
