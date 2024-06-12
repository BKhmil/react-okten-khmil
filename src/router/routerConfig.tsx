import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

const routes: RouteObject[] = [
    {
        path: '',

        // замість layout зараз апп компонент
        element: <App />,

        // шляхи на різні пейджі
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
                path: 'userPosts',
                element: <UserPostsPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            },
            {
                path: 'postComments',
                element: <PostCommentsPage />
            }
        ]
    }
];

export const routerConfig = createBrowserRouter(routes);