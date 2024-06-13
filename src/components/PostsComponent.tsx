import React from 'react';
import {useStore} from "../context/useStore";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    // тепер просто витягую все потрібні зі сховища
    // супер просто і зручно
    const {postStore: {allPosts}} = useStore();

    return (
        <div>
            <h1>Posts</h1>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {allPosts.slice(0, 20).map((post, index) => <PostComponent key={index} post={post}/>)}
            </div>
        </div>
    );
};

export default PostsComponent;