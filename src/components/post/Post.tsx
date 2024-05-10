import {IPost} from "../../types/posts/IPost";
import {FC} from "react";
import styles from './post.module.css';

interface IProps extends IPost{
}

const Post:FC<IProps> = ({
                             id,
                             title,
                             body,
                             userId,
                             tags,
                             reactions
                         }) => {
    return (<div className={styles.wrapper}>
        <div className={styles.field}>{id} - {title}</div>
        <p className={styles.field}>{body}</p>
        <div className={styles.field}>userId: {userId}</div>
        <div className={styles.field}>tags: #{tags.join('#')}</div>
        <div className={styles.field}>reactions: {reactions}</div>
    </div>);
};

export default Post;