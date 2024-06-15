import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

// 100000 разів уже описані мною сервіси
const userService = {
    getAll: (): Promise<IUser[]> =>
        // єдине що тепер тут юзаю об'єкт окремий для того щоб дістати потрібну урлу
        axiosInstance.get(urls.users.base).then(response => response.data),
    getById: (id: number): Promise<IUser> =>
        axiosInstance.get(urls.users.byId(id)).then(response => response.data)
}

const postService = {
    getAll: (): Promise<IPost[]> =>
        axiosInstance.get(urls.posts.base).then(response => response.data),
    getById: (id: number): Promise<IPost> =>
        axiosInstance.get(urls.posts.byId(id)).then(response => response.data)
}

export {
    userService,
    postService
}