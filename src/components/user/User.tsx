import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";
import styles from './User.module.css';

interface IProps {
    user: IUser;
}
const User: FC<IProps> = ({user}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>id: {user.id}</div>
            <div className={styles.field}>name: {user.name}</div>
            <div className={styles.field}>username: {user.username}</div>
            <div className={styles.field}>email: {user.email}</div>
            <ul className={styles.field}>address:
                <li>street: {user.address.street}</li>
                <li>suite: {user.address.suite}</li>
                <li>city: {user.address.city}</li>
                <li>zipcode: {user.address.zipcode}</li>
                <li>
                    <ul>geo:
                        <li>lat: {user.address.geo.lat}</li>
                        <li>lng: {user.address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
            <div className={styles.field}>phone: {user.phone}</div>
            <div className={styles.field}>website: {user.website}</div>
            <ul className={styles.field}>company:
                <li>name: {user.company.name}</li>
                <li>catchPhrase: {user.company.catchPhrase}</li>
                <li>bs: {user.company.bs}</li>
            </ul>
        </div>
    );
};

export default User;