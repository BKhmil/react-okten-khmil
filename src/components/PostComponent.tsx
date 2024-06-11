import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost
}
const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div style={{width: '18vw', border: 'solid black 2px', padding: '3px', margin: '3px'}}>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
        </div>
    );
};

export default PostComponent;