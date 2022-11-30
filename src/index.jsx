import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { HomeScreen } from './screen/HomeScreen/HomeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>
);
