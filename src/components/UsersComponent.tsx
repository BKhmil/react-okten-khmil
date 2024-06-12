import React from 'react';
import {useMyContext} from "../context/MyContext";
import UserComponent from "./UserComponent";

const UsersComponent = () => {

    // витягую із контексту потрібні дані
    const {userStore: {allUsers}} = useMyContext();

    return (
        <div>
            <h1>Users</h1>

            {/*     і виводжу їх розміткою      */}
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {allUsers.map((user, index) => <UserComponent key={index} user={user}/>)}
            </div>
        </div>
    );
};

export default UsersComponent;