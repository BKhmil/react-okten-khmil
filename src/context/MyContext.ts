import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {create} from "zustand";

type TStore = {
    userStore: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void,
        favoriteUser: IUser | null,
        setFavoriteUser: (user: IUser) => void
    },
    postStore: {
        allPosts: IPost[],
        loadPosts: (posts: IPost[]) => void
    }
}

export const defaultValue: TStore = {
    userStore: {
        allUsers: [],
        loadUsers: (users: IUser[]) => {},
        favoriteUser: null,
        setFavoriteUser: (user: IUser) => {}
    },
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPost[]) => {}
    }
};

export const useStore = create<TStore>()(set =>
    ({
        userStore: {
            allUsers: [],
            loadUsers: (users: IUser[]) =>
                set(state =>
                    ({
                        ...state,
                        userStore: {
                            ...state.userStore,
                            allUsers: users
                        }
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
        }
    })
);