import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /* <React.StrictMode> aveces hace que react renderice dos veces, mejor documentar */
    <App />
  /* </React.StrictMode> */
);


