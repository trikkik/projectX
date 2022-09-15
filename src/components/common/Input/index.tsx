import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type?: 'text' | 'password';
};

const Input = ({ id, placeholder, type, value, setValue }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} placeholder={placeholder} type={type} value={value} onChange={handler} />
    </label>
  );
};

export default Input;
