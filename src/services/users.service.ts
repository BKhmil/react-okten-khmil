import axios, {AxiosResponse} from 'axios';
import {IUsersServerResponse} from "../types/users/IUsersServerResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-type': 'application/json'
    }
});

// тут просто тягну юзерів з відповідного ендпоінта, обмеживши кількість п'ятьма юзерами
// дженерік вказує, що об'єкт Promise поверне відповідь з сервера, яка буде обгорнута в об'єкт AxiosResponse,
// де дані відповіді матимуть тип IUsersServerResponse
function getAllUsers(): Promise<AxiosResponse<IUsersServerResponse>> {
    return axiosInstance.get('/users?limit=5');
}

export {
    getAllUsers
}