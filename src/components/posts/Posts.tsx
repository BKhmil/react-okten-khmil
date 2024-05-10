import {FC, PropsWithChildren} from "react";
import styles from './posts.module.css';
import Post from "../post/Post";
import {IPost} from "../../types/posts/IPost";

// напевно даремно я кожен раз екстендю чілдренів, всеодно не юзаємо
interface IProps extends PropsWithChildren{

    // вказую 2 поля для пропсів
    posts: IPost[];
    isClicked: boolean;
}

const Posts: FC<IProps> = ({posts, isClicked}) => {
    return (<div className={styles.postsWrapper}>
        {/* заголовок для правої колонки з постами */}
        <div className={styles.postsTitle}>POSTS</div>

        {/* перевірка стейту наявності кліку на кнопку в минулому */}
        {!isClicked ? 'Please, click on "Show  posts" button' : posts.map((post, index) =>
            <Post
                /* забув додати ключ */
                key={index}
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