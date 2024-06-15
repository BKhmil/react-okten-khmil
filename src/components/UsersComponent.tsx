import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../RTK/store";
import UserComponent from "./UserComponent";
import {userActions} from "../RTK/slices/userSlice";

const UsersComponent = () => {
    const {users, isLoaded} = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            {
               isLoaded
                   ?
                   users.map((user, index) => <UserComponent key={index} user={user} withButton={true}/>)
                   :
                   <span>Loading...</span>
            }
        </div>
    );
};

export default UsersComponent;