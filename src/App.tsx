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
    const [favoriteUser, setFavoriteUser] = useState<IUser | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);

    const lift = (obj: IUser) => setFavoriteUser(obj);

    return (
        <>
            <HeaderComponent/>
            <MyContext.Provider value={
                {
                    userStore: {
                        allUsers: users,
                        setFavoriteUser: (obj: IUser) => lift(obj)
                    },
                    postStore: {
                        allPosts: posts
                    }
                }
            }>
                <Outlet/>
            </MyContext.Provider>

            <hr/>
            {favoriteUser && <div>{'Favorite user: ' + favoriteUser.name}</div>}
            <hr/>
        </>
    );
}

export default App;
