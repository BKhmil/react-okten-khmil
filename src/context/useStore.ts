import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {create} from "zustand";
import {IComment} from "../models/IComment";
// import {TUserWithPosts} from "../types/TUserWithPosts";
// import {TPostWithComments} from "../types/TPostWithComments";

// тип для мого сховища
// все зроблено по типу useState, тобто поле для даних(стейту) та відповідний сеттер для цього поля
type TStore = {
    userStore: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void,

        favoriteUser: IUser | null,
        setFavoriteUser: (user: IUser) => void

        // allUsersWithPosts: TUserWithPosts[],
        // loadUsersWithPosts: (usersWithPosts: TUserWithPosts[]) => void
    },
    postStore: {
        allPosts: IPost[],
        loadPosts: (posts: IPost[]) => void

        // allPostsWithComments: TPostWithComments[],
        // loadPostsWithComments: (postsWithComments: TPostWithComments[]) => void
    },
    commentStore: {
        allComments: IComment[],
        loadComments: (comments: IComment[]) => void
    }
}

// -------------------------------------------------------
// тут створюю константу useStore яка буде надавати можливість використовувати хук, який повертає виклик функції create

// set відповідає за оновлення стану
//                                                                      отут я вказую що set повертає наступний стейт
//                                                                      типу TStore
export const useStore = create<TStore>()(set =>
    ({
        userStore: {
            allUsers: [],

            // тут вказую що метод loadUsers пришймає масив юзерів
            loadUsers: (users: IUser[]) =>

                // і повертає функцію set, яка маніпулює станом
                // вона бере попередній стан, на основі якого повертає новий
                // частини на які метод loadUsers не впливає просто спредаються
                set(state =>
                    ({
                        ...state,
                        userStore: {
                            ...state.userStore,

                            // а частини якими я планував щоб мійш метод маніпулював, оновлюються
                            allUsers: users
                        }

                        // НУ І ТАК ПРАЦЮЮТЬ І ІНШІ МЕТОДИ НИЖЧЕ
                    })
                ),
            favoriteUser: null,
            setFavoriteUser: (user: IUser) =>
                set(state =>
                    ({
                        ...state,
                        userStore: {
                            ...state.userStore,
                            favoriteUser: user
                        }
                    })
                )
            // allUsersWithPosts: [],
            // loadUsersWithPosts: (usersWithPosts: TUserWithPosts[]) =>
            //     set(state =>
            //         ({
            //             ...state,
            //             userStore: {
            //                 ...state.userStore,
            //                 allUsersWithPosts: usersWithPosts
            //             }
            //         })
            //     )
        },
        postStore: {
            allPosts: [],
            loadPosts: (posts: IPost[]) =>
                set(state =>
                    ({
                        ...state,
                        postStore: {
                            ...state.postStore,
                            allPosts: posts
                        }
                    })
                )
            // allPostsWithComments: [],
            // loadPostsWithComments: (postsWithComments: TPostWithComments[]) =>
            //     set(state =>
            //         ({
            //             ...state,
            //             postStore: {
            //                 ...state.postStore,
            //                 allPostsWithComments: postsWithComments
            //             }
            //         })
            //     )
        },
        commentStore: {
            allComments: [],
            loadComments: (comments: IComment[]) =>
                set(state =>
                    ({
                        ...state,
                        commentStore: {
                            ...state.commentStore,
                            allComments: comments
                        }
                    })
                )
        }
    })
);