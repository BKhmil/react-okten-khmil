import React, {FC} from 'react';
import {IComment} from "../../models/comment/IComment";
import styles from './Comment.module.css';

interface IProps {
    comment : IComment;
}
const Comment: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.field}>postId: {comment.postId}</div>
            <div className={styles.field}>id: {comment.id}</div>
            <div className={styles.field}>name: {comment.name}</div>
            <div className={styles.field}>email: {comment.email}</div>
            <div className={styles.field}>body: {comment.body}</div>
        </div>
    );
};

export default Comment;