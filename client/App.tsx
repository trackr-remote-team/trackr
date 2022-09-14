import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './views/LoginPage';
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
      
  );
}