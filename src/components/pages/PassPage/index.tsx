/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../common/Form';
import Input from '../../common/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './PassPage.module.scss';

const PagePass = () => {
  const [email, setEmail] = useState('');
  return (
    <PageWrapper>
      <div className={style.page_wrapper}>
        <Form
          title="Восстановление пароля"
          distTitle=""
          // eslint-disable-next-line react/no-children-prop
          children={
            <Input type="text" placeholder="Email" id="1" value={email} setValue={setEmail} />
          }
          secondRef=""
          passText={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <p className={style.after_button}>
              Выполняя вход в сервис, вы подтверждаете, что ознакомились с документами
              <NavLink to="/"> «политика конфидициальности»</NavLink>,
              <NavLink to="/"> «согласие на обработку персональных данных» </NavLink>и
              <NavLink to="/"> «пользовательское соглашени» </NavLink>и согласны с ними.
            </p>
          }
          button={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <button type="button" className={style.enter_button}>
              Войти
            </button>
          }
        />
      </div>
    </PageWrapper>
  );
};

export default PagePass;
