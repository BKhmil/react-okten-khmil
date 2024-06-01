import React, {FC} from 'react';
import {IPost} from "../../models/post/IPost";
import styles from './Post.module.css';

interface IProps {
    post: IPost;
}
const Post: FC<IProps> = ({post}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>userId: {post.userId}</div>
            <div className={styles.field}>id: {post.id}</div>
            <div className={styles.field}>title: {post.title}</div>
            <div className={styles.field}>body: {post.body}</div>
        </div>
    );
};

export default Post;