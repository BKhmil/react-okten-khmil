import {createContext, useContext} from "react";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

// створюю тип даних який буде зберігатися в контексті
type TStore = {
    userStore: {
        allUsers: IUser[],
        setFavoriteUser: (obj: IUser) => void
    },
    postStore: {
        allPosts: IPost[]
    },
    commentStore: {
        allComments: IComment[]
    }
}

// об'єкт дефолтних значень для createContext
const defaultValue: TStore = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {}
    },
    postStore: {
        allPosts: []
    },
    commentStore: {
        allComments: []
    }
};

// створення контексту на основі потрібного типу із дефолтними значеннями
export const MyContext = createContext<TStore>(defaultValue);

// кастомний хук для того щоб не передавати кожен раз MyContext при виклику useContext
export const useMyContext = (): TStore => useContext(MyContext);