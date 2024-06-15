import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./router/routerConfig";
import {Provider} from "react-redux";
import {store} from "./RTK/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // огортаю весь додаток у контекст
    <Provider store={store}>
        {/*    у і викликаю роутерпровадер    */}
        <RouterProvider router={routerConfig} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
