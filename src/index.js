import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './component/Layout';
import { ToastContainer } from 'react-toastify';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />

    {/* Pie de página */}
    <div id="footer-center">
      <div>__________________________</div>
      <div > Contacto y redes sociales</div>
      <p />
    </div>
    {/* Fin pie de página */}
  </React.StrictMode>
);


