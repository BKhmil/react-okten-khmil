import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/user/IUser";
import {IPost} from "../models/post/IPost";
import {IComment} from "../models/comment/IComment";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

// створюю об'єкт який буде містити потрібні мені гетові запити
const requestToAPI = {
    getUsers: (): Promise<AxiosResponse<IUser[]>> => {
        return axiosInstance.get('users');
    },
    getPosts: (): Promise<AxiosResponse<IPost[]>> => {
        return axiosInstance.get('posts');
    },
    getComments: (): Promise<AxiosResponse<IComment[]>> => {
        return axiosInstance.get('comments')
    }
};

export default requestToAPI;

