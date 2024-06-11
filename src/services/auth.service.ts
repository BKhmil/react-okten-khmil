import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLocalStorageData} from "../utils/utils";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

let axiosInstance = axios.create({
   baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const tokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + tokenObtainPair.access);
    }

    return request;
});

const authService= {
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        let response;

        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);

            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response =
            await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});

        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
};

const carService = {
    getCars: async (page: string) => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {
                params: {page}
            });

            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;

                await authService.refresh(refreshToken);

                await carService.getCars(page);
            }
        }
    }
};

export {
    authService,
    carService
}