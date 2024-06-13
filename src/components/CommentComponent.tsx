import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment
}
const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div style={{width: '18vw', border: 'solid black 2px', padding: '3px', margin: '3px'}}>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
        </div>
    );
};

export default CommentComponent;