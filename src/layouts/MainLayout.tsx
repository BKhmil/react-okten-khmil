import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

// головний Layout
// відображає хедер та аутлет для пейджів
const MainLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    );
};

export default MainLayout;