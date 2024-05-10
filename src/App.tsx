import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {getAllPosts} from "./services/posts.service";
import {IPost} from "./types/posts/IPost";

const App: FC = () => {

    const [postsData, setPostsData] = useState<IPost[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const lift = (userId: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsClicked(true);
        getAllPosts(userId).then(({data}) => setPostsData(data.posts));
    }

  return (
    <div className='App'>
        <div className='users'><Users lift={lift}/></div>
        <div className='posts'><Posts posts={postsData} isClicked={isClicked}/></div>
    </div>
  );
}

export default App;
