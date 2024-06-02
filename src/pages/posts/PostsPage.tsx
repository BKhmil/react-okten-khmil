import React from 'react';
import Posts from "../../components/posts/Posts";
import {Outlet} from "react-router-dom";
import styles from './PostsPage.module.css';

// описав все у CommentsPage
const PostsPage = () => {
    // тепер у мене пейджі PostsPage i UsersPage без логіки
    // що для мене чомусь стало тепер(тавтологія) логічним
    // тобто це просто сторінка яка просто відображає інфу про пости
    // тобто пости це її головна тема, але вона може і щось інше в теорії відображати
    // а підвантажує і виконує логіку над самими постами нехай уже сам спеціалізований для цього компонент Posts
    return (
        <div className={styles.flex}>
            <Posts />
            <Outlet />
        </div>
    )
};

export default PostsPage;
