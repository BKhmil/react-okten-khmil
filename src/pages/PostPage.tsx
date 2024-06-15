import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../RTK/store";
import {useParams} from "react-router-dom";
import {postActions} from "../RTK/slices/postSlice";
import PostComponent from "../components/PostComponent";

const PostPage = () => {
    const {postId} = useParams();

    const post = useAppSelector(state => state.postSlice.post);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPostById(postId));
    }, [postId]);

    return (
        <div>
            {post && <PostComponent post={post} withButton={false} />}
        </div>
    );
};

export default PostPage;