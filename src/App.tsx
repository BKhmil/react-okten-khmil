import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {getAllPosts} from "./services/posts.service";
import {IPost} from "./types/posts/IPost";

const App: FC = () => {

    // стейт для масиву постів
    const [postsData, setPostsData] = useState<IPost[]>([]);

    // стейт для перевірки чи була натиснута кнопка для показу постів
    // стейт просто для тернарки у компоненті Posts, щоб показувати альтернативний текст,
    // якщо користувач тільки-но зайшов на головну сторінку
    const [isClicked, setIsClicked] = useState<boolean>(false);

    // наш ліфт
    // функція, яку будемо прокидувати вниз по дереву допоки вона не дійде до місця, де потрібно викликати її
    const lift = (userId: number) => {

        // оскільки я виводив всі поля юзера стовпчиком, то кожен юзер займає ддуже багато місця,
        // через це при кліку на кнопку для показу постів я скролю екран вверх, де і відображаються пости
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // встановлюю стейт кліку в true, тепер альтернативний текст не буде відображатися
        setIsClicked(true);

        // тут отримую пости
        //                                                          тут сетаю масив
        getAllPosts(userId).then(({data}) => setPostsData(data.posts));
    }

  return (
    <div className='App'>

        {/* передаю функцію-ліфт далі вниз по дереву обгортці юзерам*/}
        <div className='users'><Users lift={lift}/></div>

        {/* передаю обгортці постів масив з постами та стейт кліку на кнопку */}
        <div className='posts'><Posts posts={postsData} isClicked={isClicked}/></div>
    </div>
  );
}

export default App;
