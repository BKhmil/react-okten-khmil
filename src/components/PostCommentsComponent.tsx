import React, {useEffect, useMemo, useState} from 'react';
import {useMyContext} from "../context/MyContext";
import {TPostWithComments} from "../types/TPostWithComments";

const PostCommentsComponent = () => {

    // дістаю із контексту потрібні дані, а саме всі пости та всі коменти
    const {postStore:{allPosts}, commentStore:{allComments}} = useMyContext();

    // створюю стейт для для майбутніх постів в яких вже буде поле для їхніх коментів
    const [postsWithComments, setPostsWithComments] =
        useState<TPostWithComments[]>([]);

    // мемоізована функція яка повертає функцію, яка повертає масив з оновленими постами
    // беру кожен пост, на основі якого створюю новишй об'єкт із даними з того самого поста + додаю до нього поле
    // для коментів, наповнюю це поле фільтруючи наявні коменти за postId та перевіряючи його з поточним id поста
    const makePostWithCommentsArray = useMemo(() =>
            (): TPostWithComments[] =>
                allPosts.map(post =>
                    ({...post, comments: allComments.filter(comment =>
                            comment.postId === post.id)})),
        [allPosts, allComments]);

    // при першому рендері юзефекту через сет стейт передасться стейт для масиву постів з коментами
    // шляхом передачі в нього функції написаної і описаної вище
    useEffect(() => {
        setPostsWithComments(makePostWithCommentsArray);
    }, [makePostWithCommentsArray]);

    return (
        <div>
            <h1>Post comments</h1>
            {
                postsWithComments.map((post, index) =>
                    <div key={index}>
                        {'Comments of ' + post.title + ':'}
                        <ul>
                            {
                                post.comments.map((comment, index) => <li key={index}>{comment.name}</li>)
                            }
                        </ul>
                    </div>)
            }
        </div>
    );
};

export default PostCommentsComponent;