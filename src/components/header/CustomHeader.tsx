import React from 'react';
import styles from './CustomHeader.module.css';
import {NavLink} from "react-router-dom";

const CustomHeader = () => {
    return (
        <div className={styles.main}>
            <div className={styles.navTitle}>Links:</div>
            {/*
                через NavLink роблбю navbar
                в настпуному дз вже нормально стилізую клас active
             */}
            <nav>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'}>Posts</NavLink>
                <NavLink to={'comments'}>Comments</NavLink>
            </nav>
        </div>
    );
};

export default CustomHeader;