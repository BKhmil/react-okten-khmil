import {createContext, useContext} from "react";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

type TStore = {
    userStore: {
        allUsers: IUser[],
        setFavoriteUser: (obj: IUser) => void
    },
    postStore: {
        allPosts: IPost[]
    }
}

const defaultValue: TStore = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {}
    },
    postStore: {
        allPosts: []
    }
};

export const MyContext = createContext<TStore>(defaultValue);

export const useMyContext = (): TStore => useContext(MyContext);