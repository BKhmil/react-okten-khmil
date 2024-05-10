import {FC, PropsWithChildren} from "react";
import styles from './posts.module.css';
import Post from "../post/Post";
import {IPost} from "../../types/posts/IPost";

interface IProps extends PropsWithChildren{
    posts: IPost[];
    isClicked: boolean;
}

const Posts: FC<IProps> = ({posts, isClicked}) => {
    return (<div className={styles.postsWrapper}>
        <div className={styles.postsTitle}>POSTS</div>
        {!isClicked ? 'Please, click on "Show  posts" button' : posts.map((post) =>
            <Post
                id={post.id}
                title={post.title}
                tags={post.tags}
                userId={post.userId}
                body={post.body}
                reactions={post.reactions}
            />)}
    </div>);
}

export default Posts;