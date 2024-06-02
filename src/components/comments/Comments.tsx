import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comment/IComment";
import apiService from "../../services/api.service";
import Comment from "../comment/Comment";
import styles from './Comments.module.css';
import {useParams} from "react-router-dom";

// у файлі Posts.tsx все описав
const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    const {postId} = useParams();

    useEffect(() => {
        postId
            ?
            apiService.getCommentsById(postId).then(response => setComments(response.data))
            :
            // тут слайс на перші 100 коментів, бо всі 500 виводити це зайве
            apiService.getComments().then(response => setComments(response.data.slice(0, 100)));
    }, [postId]);

    return (
        <div className={postId && styles.wrapper}>
            <h1 className={styles.title}>{postId ? 'Comments for current post' : 'Information about all comments'}</h1>
            <div className={styles.container}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;