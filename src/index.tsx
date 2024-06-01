import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import routerConfig from "./router/routerConfig";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // рендерю в рутовому діві RouterProvider для того щоб працювала бібліотека
    // у пропсу router передаю сконфігурований елемент BrowserRouter, який мвстить всі шляхи

    // цей компонент заміняється потім на відповідні компоненти-layout'и, в залежності від обраного роуту
    <RouterProvider router={routerConfig} />
);
