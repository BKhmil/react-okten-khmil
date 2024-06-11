import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const userService = {
    getUsers: (): Promise<AxiosResponse<IUser[]>> => axiosInstance.get('/users')
}

const postService = {
    getPosts: (): Promise<AxiosResponse<IPost[]>> => axiosInstance.get('/posts')
}

export {
   userService,
   postService
}