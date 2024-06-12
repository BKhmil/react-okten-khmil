import React from 'react';
import {useMyContext} from "../context/MyContext";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useMyContext();

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