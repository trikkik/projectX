// eslint-disable-next-line import/no-unresolved
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../common/Form';
import Input from '../../common/Input';
import PageWrapper from '../../common/PageWrapper';
import style from './RegPage.module.scss';

const RegPage = () => {
  const [hasError, setHasError] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rePassword, setRePassword] = useState('');
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
          title="Регистрация"
          distTitle="Пройдите регистрацию"
          passText=""
          secondRef={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <div className={style.box_button}>
              <Checkbox>
                Принимаю условия
                <br />
                <NavLink to="/">Пользовательского соглашения</NavLink>
              </Checkbox>
            </div>
          }
          button={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <button type="button" className={style.enter_button} onClick={submitHandler}>
              Войти
            </button>
          }>
          {
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <Input type="text" placeholder="Имя" id="1" value={name} setValue={setName} />
              <Input
                type="text"
                placeholder="Фамилия"
                id="1"
                value={lastName}
                setValue={setLastName}
              />
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
              <Input
                type="password"
                placeholder="Повторите пароль"
                id="1"
                value={rePassword}
                setValue={setRePassword}
              />
            </>
          }
        </Form>
      </div>
    </PageWrapper>
  );
};

export default RegPage;
