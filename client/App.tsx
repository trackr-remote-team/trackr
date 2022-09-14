import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
    </>
  );
}