import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/post/IPost";
import apiService from "../../services/api.service";
import Post from "../../components/post/Post";
import styles from './PostsPage.module.css';

// описав все у CommentsPage
const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        apiService.getPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <>
            <h1 className={styles.title}>Information about all posts</h1>
            <div className={styles.container}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </>
    );
};

export default PostsPage;