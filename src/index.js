import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './component/Layout';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* Pie de página */}
    <div>__________________________</div>
    <div> Contacto y redes sociales</div>
    <p/>
    {/* Fin pie de página */}
  </React.StrictMode>
);


