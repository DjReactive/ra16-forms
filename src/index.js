import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. hex2rgb
//import App from './hex2rgb/App';
// 1. steps
import App from './steps/App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
