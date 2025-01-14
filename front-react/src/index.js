import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './component/Layout';
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
  <React.StrictMode>
    
    <App />

    {/* Pie de página */}
    <div id="footer-center">
      <div>__________________________</div>
      <div > Contacto y redes sociales</div>
      <p />
    </div>
    {/* Fin pie de página */}
  </React.StrictMode>,
    document.getElementById('root')
);


