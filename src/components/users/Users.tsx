import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/user/IUser";
import requestToAPI from "../../services/api.service";
import User from "../user/User";
import styles from './Users.module.css';

// КОМЕНТ НИЖЧЕ ДОНЕДАВНА БУВ НАПИСАНИЙ ДЛЯ ПЕЙДЖІВ, ПОКИ Я НЕ ПОРОЗУМНІШАВ
// перелапатив весь код, додав спецільні компоненти які тепер виконуються логіку замість пейджів
// тому особливо перечитувати і виправляти його не хочу


//  всі компоненти-обгортки, які роблять запити через useEffect, у мене йдуть одним шаблоном, тобто містять:
//      - стейт для збереження масиву який приходить від запиту
//      - useEffect для виконання самого запиту
//      - розмітку у вигляді фрагменту в якому є h1 із заголовком про те в якому ми розділі
//        та дівом-контейнером у якому через мапування викликається потрібний компонент в який пропсами передаю
//        потрібні елементи(по-одному) зі стейту
const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        requestToAPI.getUsers().then(response => setUsers(response.data.slice(0, 4)));
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Information about all users</h1>
            <div className={styles.container}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export default Users;