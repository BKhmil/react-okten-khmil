import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/user/IUser";
import requestToAPI from "../../services/api.service";
import User from "../../components/user/User";
import styles from './UsersPage.module.css';

// описав все у CommentsPage
const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        requestToAPI.getUsers().then(response => setUsers(response.data));
    }, []);
    return (
        <>
            <h1 className={styles.title}>Information about all users</h1>
            <div className={styles.container}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </>
    );
};

export default UsersPage;