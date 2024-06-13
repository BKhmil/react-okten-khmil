import React from 'react';
import {useStore} from "../context/useStore";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useStore();

    return (
        <div>
            <h1>Users</h1>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {allUsers.map((user, index) => <UserComponent key={index} user={user}/>)}
            </div>
        </div>
    );
};

export default UsersComponent;