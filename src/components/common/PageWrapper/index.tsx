import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

type PageWrapperPropsType = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperPropsType) => (
  <div className={style.page_wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
