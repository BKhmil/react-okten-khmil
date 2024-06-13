import React, {useEffect, useMemo} from 'react';
import {useStore} from "../context/useStore";
import {TUserWithPosts} from "../types/TUserWithPosts";

const UserPostsComponent = () => {
    const {
        userStore: {allUsers},
        postStore: {allPosts},
        userStore,
        userStore:{allUsersWithPosts}
    } = useStore();

    // OMG
    const makeUserWithPostsArray = useMemo(() =>
        (): TUserWithPosts[] =>
            allUsers.map(user =>
                ({
                    ...user, posts: allPosts.filter(post =>
                        post.userId === user.id)
                })), [allUsers, allPosts]);

    useEffect(() => {
        userStore.loadUsersWithPosts(makeUserWithPostsArray);
    }, [makeUserWithPostsArray]);

    return (
        <div>
            <h1>User posts</h1>
            {
                allUsersWithPosts.map((user, index) =>
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