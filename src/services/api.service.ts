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
    },

    // 7 дз, додав ці два методи. Напевно на цьому етапі вже треба було розбити по сервісам
    // але першочергово поставив ціль зробити так щоб працювало, і, що не мало важливо, виглядало гарно
    getPostsById: (id: string): Promise<AxiosResponse<IPost[]>> => {
        return axiosInstance.get('users/' + id + '/posts');
    },
    getCommentsById: (id: string): Promise<AxiosResponse<IComment[]>> => {
        return axiosInstance.get('posts/' + id + '/comments');
    }
};

export default requestToAPI;

