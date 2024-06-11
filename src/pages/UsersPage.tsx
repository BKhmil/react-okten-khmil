import React from 'react';
import {useMyContext} from "../context/MyContext";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent />
        </div>
    );
};

export default UsersPage;