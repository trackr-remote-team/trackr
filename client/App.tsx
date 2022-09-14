import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import Visualizer from './views/GUI/Visualizer'
export default function App(): JSX.Element {
  return (
    <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>      
  );
}