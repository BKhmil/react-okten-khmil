import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../RTK/store";
import {userActions} from "../RTK/slices/userSlice";
import UserComponent from "../components/UserComponent";

const UserPage = () => {
    // з параметрів урли отримую значення id
    const {userId} = useParams();

    // витягую одного юзера зі стану
    const user = useAppSelector(state => state.userSlice.user);

    // юзаю діспатч
    const dispatch = useAppDispatch();

    useEffect(() => {
        // юзефект через діспатч отримує і оновлює значення для одного юзера по айді
        dispatch(userActions.loadUserById(userId));

        // слідкування за оновленням айді у параметрах урли
    }, [userId]);

    return (
        <div>
            {
                // якщо юзера отримав, виводжу без кнопки details
                user && <UserComponent user={user} withButton={false} />
            }
        </div>
    );
};

export default UserPage;