import React from 'react';
import {useStore} from "../context/MyContext";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useStore();

    return (
        <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            {allUsers.map((user, index) => <UserComponent key={index} user={user}/>)}
        </div>
    );
};

export default UsersComponent;