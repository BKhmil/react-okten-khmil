import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

export const routerConfig = createBrowserRouter([
    {
        // дефолтна урла відображає MainLayout
        path: '/',
        element: <MainLayout />,

        // сама MainLayout має наступних чілдренів
        children: [
            // сторінку авторизації, яка відображається по дефолту
            {
                index: true,
                element: <AuthPage />
            },

            // і сторінка з машинами, за шляхом /cars
            {
                path: 'cars',
                element: <CarsPage />
            }
        ]
    }
]);