import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {MyContext} from "./context/MyContext";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <>
            <HeaderComponent/>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>
                <Outlet/>
            </MyContext.Provider>
        </>
    );
}

export default App;
