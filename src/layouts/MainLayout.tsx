import React from 'react';
import {Outlet} from "react-router-dom";
import CustomHeader from "../components/header/CustomHeader";
import CustomFooter from "../components/footer/CustomFooter";

// головна обгортка
const MainLayout = () => {
    return (
        <div>
            <CustomHeader />

            {/*
                замість аутлету підставляються pages
                взагалі тут крім нього нічого не змінюється
            */}
            <Outlet />
            <CustomFooter />
        </div>
    );
};

export default MainLayout;