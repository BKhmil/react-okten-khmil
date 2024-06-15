import React, {FC} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

const App: FC = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default App;
