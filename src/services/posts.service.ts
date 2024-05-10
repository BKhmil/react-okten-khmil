import axios, {AxiosResponse} from 'axios';
import {IPostsServerResponse} from "../types/posts/IPostsServerResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-type': 'application/json'
    }
});

// тут вже тягну пости з відповідного ендпоінта
// про дженерік писав в іншому сервісі
function getAllPosts(id: number): Promise<AxiosResponse<IPostsServerResponse>> {
    return axiosInstance.get(`/users/${id}/posts`);
}

export {getAllPosts};