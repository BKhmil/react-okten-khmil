import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPost,
    withButton: boolean
}

const PostComponent: FC<IProps> = ({post, withButton}) => {
    const navigate = useNavigate();

    return (
        <div>
            {post.id + ' - ' + post.title}
            {withButton && <button onClick={() => navigate(post.id.toString())}>details</button>}
        </div>
    );
};

export default PostComponent;