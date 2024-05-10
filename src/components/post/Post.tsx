import {IPost} from "../../types/posts/IPost";
import {FC} from "react";
import styles from './post.module.css';

// ось це місце злочину, майже година топтання на місці
// я прописував:
//          interface IProps {
//              post: IPost;
//          }
//
// і не розумів що не так
// хоча якщо чесно, минуло вже пів години, а я не пам'ятаю що саме я тут писав
// можливо і не те що написано вище
//
// але суть була така:
// я не знав що оператор & і зв'язка за допомогою нього об'єкту при створенні тайпу це те саме
// що і екстенд у інтерфейсах
//
// думав що це:
//
//          interface IProps extends PropsWithChildren { post: IPost; }
//          type IProps = PropsWithChildren & { post: IPost }
//
// і це:
//
//          interface IProps extends PropsWithChildren, IPost { }
//          type IProps = PropsWithChildren & IPost
//
// це одне і те саме
//
// здається  що я вже забув базовий джс
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