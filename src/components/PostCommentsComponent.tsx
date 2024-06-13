import React, {useEffect, useMemo} from 'react';
import {TPostWithComments} from "../types/TPostWithComments";
import {useStore} from "../context/useStore";

const PostCommentsComponent = () => {
    // дістаю із глобального стейту, який створенишй зустандом, масив постів та коментів
    const {
        postStore:{allPosts},
        commentStore:{allComments},
        postStore,
        postStore:{allPostsWithComments}
    } = useStore();

    // мемоізована функція яка повертає функцію, яка повертає масив з оновленими постами
    // беру кожен пост, на основі якого створюю новишй об'єкт із даними з того самого поста + додаю до нього поле
    // для коментів, наповнюю це поле фільтруючи наявні коменти за postId та перевіряючи його з поточним id поста
    const makePostWithCommentsArray = useMemo(() =>
            (): TPostWithComments[] =>
                allPosts.map(post =>
                    ({...post, comments: allComments.filter(comment =>
                            comment.postId === post.id)})),
        [allPosts, allComments]);

    // при першому рендері юзефекту у глобальний стейт зустанду передасться стейт для масиву постів з коментами
    // шляхом передачі в нього функції написаної і описаної вище
    useEffect(() => {
        postStore.loadPostsWithComments(makePostWithCommentsArray);
    }, [makePostWithCommentsArray]);

    return (
        <div>
            <h1>Post comments</h1>
            {
                allPostsWithComments.map((post, index) =>
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