import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPost} from "../../models/IPost";
import styles from './FormCustom.module.css';
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../../validators/post.validator";

const FormCustom = () => {
    // стейт для постів
    const [post, setPost] = useState<IPost | null>(null);

    // деструктуризую useForm
    let {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<IPost>({
        // валідацію відбуваєтьься при введенні до інпутів
        mode: 'onChange',
        // прив'язка валідптора
        resolver: joiResolver(postValidator)});

    // метод який викликається на сабміт форми
    const forSubmit = (data: IPost) => {
        // роблю фетч запит на потрібну урлу
        fetch('https://jsonplaceholder.typicode.com/posts', {
            // метод пост
            method: 'POST',
            // витягую значення із полів у новий об'єкт
            body: JSON.stringify({
                userId: data.userId,
                title: data.title,
                body: data.body
            }),
            // у заголовку вказав що джейсон відправляю
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json: IPost) => {
                console.log(json);
                // тут я вирішив після відправки оновлювати стейт
                // тобто стейт у мене грає роль суто ререндерщика
                // для того щоб потім відображати інфу про дані минулого поста
                setPost(json);
                reset();
            });
    };

    return (
        <div className={styles.wrapper}>
            <h1>Create new post</h1>
            {/*
                тут на сабміт ставлю хендлер із useForm в який передаю свій метод, чи точніше функцію
                реєструю поля, а під кожним лейблом з інпутом виводжу пр необхідності текст помилки валідації
            */}
            <form onSubmit={handleSubmit(forSubmit)}>
                <label className={styles.block}>Enter your id
                    <input className={styles.block} type="number" {...register('userId')} />
                </label>
                {errors.userId && <span>{errors.userId.message}</span>}

                <label className={styles.block}>Enter title:
                    <input className={styles.block} type="text" {...register('title')} />
                </label>
                {errors.title && <span>{errors.title.message}</span>}

                <label className={styles.block}>Enter post's body:
                    <textarea className={styles.block} {...register('body')} />
                </label>
                {errors.body && <span>{errors.body.message}</span>}

                <button className={styles.block} type="submit">Create</button>
            </form>
            {/*
                тут не став шарно розбивати по полях і різних блоках
                , а просто через стрінгіфай вивів інфу про попередній пост
            */}
            {post && (
                <div className={styles.post}>
                    <h2>Previous post data:</h2>
                    <pre>{JSON.stringify(post, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default FormCustom;