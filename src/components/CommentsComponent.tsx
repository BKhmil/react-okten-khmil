import React from 'react';
import {useMyContext} from "../context/MyContext";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const {commentStore: {allComments}} = useMyContext();

    return (
        <div>
            <h1>Comments</h1>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {
                    allComments.slice(0, 20).map((comment, index) =>
                        <CommentComponent key={index} comment={comment} />)
                }
            </div>
        </div>
    );
};

export default CommentsComponent;