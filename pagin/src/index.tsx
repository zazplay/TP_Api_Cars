import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/sitepagenumsearch/App';
import reportWebVitals from './reportWebVitals';
import NavigationMenu from './components/navigationMenu/navigationMenu'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationMenu />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();