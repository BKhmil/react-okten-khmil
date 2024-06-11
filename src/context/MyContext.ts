import {createContext, useContext} from "react";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

type TStore = {
    userStore: {
        allUsers: IUser[]
    },
    postStore: {
        allPosts: IPost[]
    }
}

const defaultValue: TStore = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    }
};

export const MyContext = createContext<TStore>(defaultValue);

export const useMyContext = (): TStore => useContext(MyContext);