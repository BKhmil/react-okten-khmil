import React from 'react';
import UserPostsComponent from "../components/UserPostsComponent";

// пейджа без логіки яка просто відображає контент
const UserPostsPage = () => {
    return (
        <div>
            <UserPostsComponent />
        </div>
    );
};

export default UserPostsPage;