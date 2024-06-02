import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import HomePage from "../pages/home/HomePage";
import Posts from "../components/posts/Posts";
import Comments from "../components/comments/Comments";

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
                element: <UsersPage />,
                children: [
                    {
                        index: true,
                        // дефолтне відобрадення для аутлету який висить у UsersPage
                        element: <h1 style={{marginTop: '20px', fontSize: '40px'}}>Click on "show user's posts" button</h1>
                    },
                    {
                        // додумався назвати не просто id
                        // бо коли називав і тут, і у помтах з коментами як id
                        // то мій useEffect у Posts.tsx тригерився так наче я передаю id від юзера
                        // а не від поста
                        path: ':userId',
                        element: <Posts />
                    }
                ]
            },
            {
                path: 'posts',
                element: <PostsPage />,
                children: [
                    {
                        index: true,
                        // дефолтне відображення для аутлету який висить у PostsPage
                        element: <h1 style={{marginTop: '20px', fontSize: '40px'}}>Click on "show comments to post" button</h1>
                    },
                    {
                        path: ':postId',
                        element: <Comments />
                    }
                ]
            },
            {
                path: 'comments',
                element: <CommentsPage />
            }
        ]
    }
]);

export default routerConfig;
