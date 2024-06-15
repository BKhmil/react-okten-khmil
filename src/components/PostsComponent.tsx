import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../RTK/store";
import {postActions} from "../RTK/slices/postSlice";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            {
                isLoaded
                    ?
                    posts.map((post, index) => <PostComponent key={index} post={post} withButton={true} />)
                    :
                    <span>Loading...</span>
            }
        </div>
    );
};

export default PostsComponent;