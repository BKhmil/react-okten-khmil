import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'} >Login page</NavLink>
                </li>
                <li>
                    <NavLink to={'/cars'}>Cars page</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;