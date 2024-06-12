import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet, useLocation} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {commentService, postService, userService} from "./services/api.service";
import {MyContext} from "./context/MyContext";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IComment} from "./models/IComment";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);
    const [favoriteUser, setFavoriteUser] = useState<IUser | null>(null);

    const {pathname} = useLocation();

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data));
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
                    },
                    commentStore: {
                        allComments: comments
                    }
                }
            }>
                <Outlet/>
            </MyContext.Provider>

            <hr/>
                {pathname === '/users' && favoriteUser && <div>{'Favorite user: ' + favoriteUser.name}</div>}
            <hr/>
        </>
    );
}

export default App;
