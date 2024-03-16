import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';
ReactDOM.hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();


