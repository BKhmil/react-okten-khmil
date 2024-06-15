import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";

// також описаний мною вже давно конфіг роутера

// масив роутів які навігують до відповідних пейджів
const routes: RouteObject[] = [
    {
        path: '',
        element: <App />,
        children: [
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'users/:userId',
                element: <UserPage />
            },
            {
                path: 'posts/:postId',
                element: <PostPage />
            }
        ]
    }
];

// ну і створення браузер_роутеру на основі верхнього масиву роутів
export const routerConfig = createBrowserRouter(routes);