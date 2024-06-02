import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/post/IPost";
import apiService from "../../services/api.service";
import Post from "../post/Post";
import styles from './Posts.module.css';
import {useParams} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    // юзпарамс для витягування path variable
    const {userId} = useParams();

    // отут був прикол, два useEffect'а як виявилось не можна пхати в тернарку :)
    // що і логічно, аж соромно за те що я намагався таке зробити
    // тому тернарка всередині
    // умова скпер проста, думаю пояснювати не треба
    useEffect(() => {
        userId
            ?
            apiService.getPostsById(userId).then(response => setPosts(response.data))
            :
            apiService.getPosts().then(response => setPosts(response.data.slice(0, 10)));
    }, [userId]);

    return (
        <div className={styles.wrapper}>
            {/*
                ну і тут також тепер треба враховувати момент як ми відображаємо компонент
                - як чайлд, чи як незалежну одиницю
            */}
            <h1 className={styles.title}>{userId ? 'Current user posts' : 'Information about all posts'}</h1>
            <div className={styles.container}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default Posts;