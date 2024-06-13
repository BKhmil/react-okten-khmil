import React from 'react';
import {useStore} from "../context/MyContext";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useStore();

    return (
        <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            {allPosts.slice(0, 20).map((post, index) => <PostComponent key={index} post={post}/>)}
        </div>
    );
};

export default PostsComponent;