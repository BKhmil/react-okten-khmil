import axios, {AxiosResponse} from 'axios';
import {IUsersServerResponse} from "../types/users/IUsersServerResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-type': 'application/json'
    }
});

function getAllUsers(): Promise<AxiosResponse<IUsersServerResponse>> {
    return axiosInstance.get('/users');
}

export {
    getAllUsers
}