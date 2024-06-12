import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// сервіси з відповідними гетовими методами для отримання потрібних даних
const userService = {
    getUsers: (): Promise<AxiosResponse<IUser[]>> => axiosInstance.get('/users')
}

const postService = {
    getPosts: (): Promise<AxiosResponse<IPost[]>> => axiosInstance.get('/posts')
}

const commentService = {
    getComments: (): Promise<AxiosResponse<IComment[]>> => axiosInstance.get(('/comments'))
}

export {
    userService,
    postService,
    commentService
}