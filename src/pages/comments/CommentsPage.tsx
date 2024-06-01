import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/comment/IComment";
import apiService from "../../services/api.service";
import Comment from "../../components/comment/Comment";
import styles from './CommentsPage.module.css';

//  всі пейджі у мене йдуть одним шаблоном, тобто містять:
//      - стейт для збереження масиву який приходить від запиту
//      - useEffect для виконання самого запиту
//      - розмітку у вигляді фрагменту в якому є h1 із заголовком про те в якому ми розділі
//        та дівом-контейнером у якому через мапування викликається потрібний компонент в який пропсами передаю
//        потрібні елементи(по-одному) зі стейту
const CommentsPage = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        // тут слайс на перші 100 коментів, бо всі 500 виводити це зайве
        apiService.getComments().then(response => setComments(response.data.slice(0, 100)));
    }, []);

    return (
        <>
            <h1 className={styles.title}>Information about all comments</h1>
            <div className={styles.container}>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </>
    );
};

export default CommentsPage;