import React from 'react';
import {useMyContext} from "../context/MyContext";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore: {allPosts}} = useMyContext();

    return (
        <div style={{display: 'flex', flexFlow: 'row wrap'}}>
            {allPosts.map((post, index) => <PostComponent key={index} post={post}/>)}
        </div>
    );
};

export default PostsComponent;