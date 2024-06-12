import React, {useEffect, useMemo, useState} from 'react';
import {useMyContext} from "../context/MyContext";
import {TUserWithPosts} from "../types/TUserWithPosts";

// опис якишй містить файл PostCommentsComponent.tsx буде аналогічним і для цього файлу
const UserPostsComponent = () => {
    const {userStore:{allUsers}, postStore:{allPosts}} = useMyContext();

    const [usersWithPosts, setUsersWithPosts] =
        useState<TUserWithPosts[]>([]);

    // OMG
    const makeUserWithPostsArray = useMemo(() =>
        (): TUserWithPosts[] =>
            allUsers.map(user =>
                ({...user, posts: allPosts.filter(post =>
                        post.userId === user.id)})),
        [allUsers, allPosts]);

    useEffect(() => {
        setUsersWithPosts(makeUserWithPostsArray);
    }, [makeUserWithPostsArray]);

    return (
        <div>
            <h1>User posts</h1>
            {
                usersWithPosts.map((user, index) =>
                    <div key={index}>
                        {'Posts of ' + user.name + ':'}
                        <ul>
                            {
                                user.posts.map((post, index) => <li key={index}>{post.title}</li>)
                            }
                        </ul>
                    </div>)
            }
        </div>
    );
};

export default UserPostsComponent;