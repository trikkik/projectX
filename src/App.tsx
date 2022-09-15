import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminContainer from './containers/AdminContrainer';
import AuthContainer from './containers/AuthContainer';
import CardContainer from './containers/CardContainer';
import ErrorContainer from './containers/ErrorContainer';
import MainContainer from './containers/MainContainer';
import PassContainer from './containers/PassContainer';
import RedactContainer from './containers/RedactContainer';
import RegContainer from './containers/RegContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<MainContainer />} />
    <Route path="/auth" element={<AuthContainer />} />
    <Route path="/pass" element={<PassContainer />} />
    <Route path="/reg" element={<RegContainer />} />
    <Route path="/error" element={<ErrorContainer />} />
    <Route path="/card" element={<CardContainer />} />
    <Route path="/redact" element={<RedactContainer />} />
    <Route path="/admin" element={<AdminContainer />} />
  </Routes>
);

export default App;
