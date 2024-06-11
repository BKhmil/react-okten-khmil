import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {useMyContext} from "../context/MyContext";

interface IProps {
    user: IUser;
}
const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {setFavoriteUser}} = useMyContext();

    return (
        <div style={{width: '18vw', border: 'solid black 2px', padding: '3px', margin: '3px'}}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <button onClick={() => setFavoriteUser(user)}>set user as favorite</button>
        </div>
    );
};

export default UserComponent;