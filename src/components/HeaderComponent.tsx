import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>home</NavLink></li>
                <li><NavLink to={'users'}>users page</NavLink></li>
                <li><NavLink to={'posts'}>posts page</NavLink></li>
                <li><NavLink to={'comments'}>comments page</NavLink></li>
                <li><NavLink to={'userPosts'}>user posts page</NavLink></li>
                <li><NavLink to={'postComments'}>post comments page</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;