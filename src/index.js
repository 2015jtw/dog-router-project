import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

// import components and react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Whiskey from './Whiskey';
import Casey from './Casey';
import Rusty from './Rusty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="casey" element={<Casey />} />
        <Route path="whiskey" element={<Whiskey />} />
        <Route path="rusty" element={<Rusty />} />
      </Route>

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
