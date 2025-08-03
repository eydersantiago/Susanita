// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// si tu componente principal está en src/pages/App.jsx:
import App from './pages/App';
import './index.css'; // si tienes estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
