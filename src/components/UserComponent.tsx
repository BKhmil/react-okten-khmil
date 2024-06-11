import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps {
    user: IUser;
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div style={{width: '18vw', border: 'solid black 2px', padding: '3px', margin: '3px'}}>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
        </div>
    );
};

export default UserComponent;