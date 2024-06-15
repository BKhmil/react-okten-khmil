import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser,
    withButton: boolean
}
const UserComponent: FC<IProps> = ({user, withButton}) => {
    const navigate = useNavigate();

    return (
        <div>
            {user.id + ' - ' + user.name}
            {withButton && <button onClick={() => navigate(user.id.toString())}>details</button>}
        </div>
    );
};

export default UserComponent;