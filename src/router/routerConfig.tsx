import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import HomePage from "../pages/home/HomePage";

// створюю об'єкт Router в який, як я зрозумів, прописую масив із об'єктів
// кожен з(об'єктів) яких на даному рівні містить роут до певного Layout
const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,

        // а на цьому рівні подібний масив містить вже Pages
        children: [

            // як виявилось то для того щоб елемент був доступним як для "активного" роутингу
            // так і для дефолтного відображення, треба його прописати окремо із index і окремо із path
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            }
        ]
    }
]);

export default routerConfig;
