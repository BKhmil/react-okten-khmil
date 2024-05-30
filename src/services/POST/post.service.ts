import axios, {AxiosResponse} from "axios";
import {IPost} from "../../models/IPost";

let axiosInstance  = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

export function postReq(data: IPost): Promise<AxiosResponse<IPost>> {
    return axiosInstance.post('/posts', {
        userId: data.userId,
        title: data.title,
        body: data.body
    }).then((response: AxiosResponse<IPost>) => response);
}