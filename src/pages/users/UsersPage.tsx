import React from 'react';
import Users from "../../components/users/Users";
import {Outlet} from "react-router-dom";
import styles from './UsersPage.module.css';

// описав все у CommentsPage
const UsersPage = () => {
    return (
        <div className={styles.flex}>
            <Users />
            <Outlet />
        </div>
    );
};

export default UsersPage;