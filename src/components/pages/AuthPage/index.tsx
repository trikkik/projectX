// import Password from 'antd/lib/input/Password';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../common/Form';
import Input from '../../common/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [hasError, setHasError] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const submitHandler = () => {
    if (password.length >= 10) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  };
  useEffect(() => {
    if (password.length > 0) {
      if (password.length >= 10) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  }, [password]);

  return (
    <PageWrapper>
      <div className={style.wrapper}>
        <Form
          title="Авторизация"
          distTitle="Пройдите авторизацию"
          passText=""
          secondRef={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <div className={style.link_button}>
              <NavLink to="/pass">Забыли пароль?</NavLink>
            </div>
          }
          button={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <NavLink to="/redact">
              <button type="button" className={style.enter_button} onClick={submitHandler}>
                Войти
              </button>
            </NavLink>
          }>
          {
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <Input type="text" placeholder="Email" id="1" value={email} setValue={setEmail} />
              <Input
                type="password"
                placeholder="Пароль"
                id="1"
                value={password}
                setValue={setPassword}
              />
              {hasError && (
                <div>
                  <span>Пароль короткий</span>
                </div>
              )}
            </>
          }
        </Form>
      </div>
    </PageWrapper>
  );
};

export default AuthPage;
