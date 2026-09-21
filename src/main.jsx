import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

// This is the one place React "attaches" itself to the page.
// #root is the empty <div> in index.html.
// BrowserRouter enables page navigation (different URLs -> different screens)
// without full page reloads — needed once we have more than one page.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
