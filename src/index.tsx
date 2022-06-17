import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import '@fontsource/roboto/300.css';    // 300
import '@fontsource/roboto/400.css';    // 400
import '@fontsource/roboto/500.css';    // 500
import '@fontsource/roboto/700.css';    // 700

import 'react-image-gallery/styles/css/image-gallery.css';
import AppRouting from './approuting';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouting />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
