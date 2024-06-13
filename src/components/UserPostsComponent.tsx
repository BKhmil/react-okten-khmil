import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/MyContext";
import {TUserWithPosts} from "../types/TUserWithPosts";

const UserPostsComponent = () => {
    const {userStore:{allUsers}, postStore:{allPosts}} = useStore();

    const [usersWithPosts, setUsersWithPosts] =
        useState<TUserWithPosts[]>([]);

    // OMG
    const makeUserWithPostsArray = useMemo(() =>
        (): TUserWithPosts[] =>
            allUsers.map(user =>
                ({...user, posts: allPosts.filter(post =>
                        post.userId === user.id)})), [allUsers, allPosts]);

    useEffect(() => {
        setUsersWithPosts(makeUserWithPostsArray);
    }, [makeUserWithPostsArray]);

    return (
        <div>
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