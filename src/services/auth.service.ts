import axios, {AxiosError} from "axios";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {retriveLocalStorageData} from "../utils/utils";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

let axiosInstance = axios.create({
   baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

// цей блок коду перехоплює запити
// в даному випадку я хочу впровадити щось відхоплюючи request-запит

// на даному етапі мені потрібно під час get запиту на cars впровадити свій access токен
axiosInstance.interceptors.request.use(request => {

    // якщо у мене  в лс є потрібний мені запис
    // і якщо у мене йде request не на ендпоінти для аутентифікації або для використання рефреш-токену
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {

        // дістаю із лс об'єкт в якому збережені access i refresh токени
        const tokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');

        // і в хедер реквесту сетаю
        //  headerName: 'Authorization',  value: 'Bearer ' + access токен із об'єкту який був в лс
        request.headers.set('Authorization', 'Bearer ' + tokenObtainPair.access);
    }

    // і тепер запит летить далі
    return request;
});

// сервіс для аутентифікаційних справ
const authService= {
    // метод для проведення аутентифікації
    // приймає в себе дані з форми, повертає булеве значення
    authentication: async (authData: IAuthDataModel): Promise<boolean> => {
        // декларую змінну тут, бо якщо це зробити в try-блоці - вона стане локальною для нього
        let response;

        try {
            // евейчу постовий запит на ендпоінт /auth, переадю дані зф орми у body
            // типізую тип поверення як ITokenObtainPair, бо відповіддю мені надходять токени
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);

            // ну і сетаю цей об'єкт з токенами в лс
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            // помилку просто виводжу
            console.log(e);
        }

        // повертає функція, як я вище писав, булеве значення, а саме:
        // чи прийшла нам відповідь взагалі,
        // потім чи є в ній поле data(бо може бути axiosError у відповіді на скільки я розумію),
        // потім чи є в об'єкті data поле access

        // і такі самі перевірки для поля refresh
        // ну і все це приведено до булевого типу через !!
        return !!(response?.data?.access && response?.data?.refresh);
    },

    // цей метод відповідає за використання refresh токену
    // приймає сам рефреш токен
    refresh: async (refreshToken: string) => {
        // евейчу постовий запит на ендпоінт /auth/refresh, передаю refresh токен у body
        const response =
            await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});

        // ну і сетаю об'єкт з новими токенами у лс
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
};

// сервіс для роботи з машинами
const carService = {
    // метод для отримання не просто Cars, а об'єкту який містить детальну інфу про записи моїх cars
    // метод приймає конкретну сторінку, для можливості реалізації пагінації

    // також тут відбувається авторефреш токенів. якщо access токен здох
    getCars: async (page: string) => {
        try {
            // гетовий запит на ендпоінт /cars, у params передаю сторінку, яку хочу отримати
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {
                params: {page}
            });

            // і повертаю вже масив машин
            return response.data;
        } catch (e) {
            // приведення помилки до типу AxiosError
            const axiosError = e as AxiosError;



            // тут йде перевірка на те чи наявна у нас помилка(? нижче написав чому не розумію навіщо воно)
            // потім перевірка йде на поле response у помилці
            // якщо все гуд - перевіряю чи статус === 401
            if (axiosError?.response?.status === 401) {
                // до речі не дуже розумію навіщо отут "axiosError?" цей момент
                // бо якщо ми зайшли в catch-блок то в нас 100% повинна бути помилка


                // якщо так, то отримую рефреш токен із лс
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;

                // і роблю рефреш токенів
                await authService.refresh(refreshToken);

                // ну і новий запит для отимання машин роблю
                await carService.getCars(page);
            }
        }
    }
};

export {
    authService,
    carService
}