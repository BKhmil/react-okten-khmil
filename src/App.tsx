import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet, useLocation} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {commentService, postService, userService} from "./services/api.service";
import {useStore} from "./context/useStore";

const App: FC = () => {
    const {
        userStore,
        userStore:{favoriteUser},
        postStore,
        commentStore
    } = useStore();

    const {pathname} = useLocation();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComments().then(value => commentStore.loadComments(value.data));
    }, []);

    return (
        <>
            <HeaderComponent/>

            <Outlet/>

            <hr/>
                {pathname === '/users' && favoriteUser && <div>{'Favorite user: ' + favoriteUser.name}</div>}
            <hr/>
        </>
    );
}

export default App;
