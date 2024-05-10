import {IUser} from "../../types/users/IUser";

// підключив додаткову лібу для гарного відображення вкладених об'єктів
// адже я щось не дуже розумію чи взагалі можна, і якщо так - то як це робити через for in
import stringify from "json-stringify-pretty-compact";
import {FC, PropsWithChildren} from "react";
import styles from './user.module.css';

// інтерфейс для пропсів, я знайшов в інеті спосіб екстендити можливість наявності чілдренів
// також заекстендив тип IUser
interface IProps extends PropsWithChildren, IUser {
}

// отут прийшлось робити type окремий, бо я так і не зрозумів до кінця як все працює
// адже, як тепер я це вже розумію, оцей оператор & заміняє нам екстенд
// але спочатку я цього не розумів, і думав що такий запис:
//
//           type IPropsType = IProps & {lift?: (postId:number) => void};
//
// це те саме що і такий:
//
//          interface IProps extends PropsWithChildren, IUser {
//              lift?: (postId:number) => void;
//          }
//
// можливо і далі я щось не розумію, але це два різних за функціоналом записи
// дізнався я про це завдяки тому що майже годину ловив через це помилку
// на компоненті Posts
// так от, на скільки я зрозумів, то оце:
//
//          type IPropsType = IProps & {lift?: (postId:number) => void};
//
// розширює пропс, додаючи нове поле до нього
// а оце:
//
//          interface IProps extends PropsWithChildren, IUser {
//               lift?: (postId:number) => void;
//           }
//
// додає нове поле до самого (FC) компоненту
// якщо я не правий - напишіть потім, будь ласка
type IPropsType = IProps & {lift?: (postId:number) => void};

const User: FC<IPropsType> = ({
                  id,
                  firstName,
                  lastName,
                  maidenName,
                  age,
                  gender,
                  email,
                  phone,
                  username,
                  password,
                  birthDate,
                  image,
                  bloodGroup,
                  height,
                  weight,
                  eyeColor,
                  hair,
                  domain,
                  ip,
                  address,
                  macAddress,
                  university,
                  bank,
                  company,
                  ein,
                  ssn,
                  userAgent,
                                  lift
              }) => {

    // тут створюю функцію яку буду віддавати івенту кліку
    const  clickHandler = () => {

        // ця функція перевіряє чи передали ми пропсами поле lift,
        // адже воно там у нас опціально прописано
        if (lift) {

            // і якщо так - робить виклик функції-ліфту з потрібним аргументом
            lift(id);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.field}>id: {id}</div>
                <div className={styles.field}>{firstName} - {lastName} - {maidenName}</div>
                <div className={styles.field}>age: {age} - gender: {gender}</div>
                <div className={styles.field}>email: {email} - phone: {phone}</div>
                <div className={styles.field}>username: {username} - password: {password}</div>
                <div className={styles.field}>birthDate: {birthDate}</div>
                <img style={{width: '200px'}} src={image} alt={firstName}/>
                <div className={styles.field}>bloodGroup: {bloodGroup} - eyeColor: {eyeColor}</div>
                <div className={styles.field}>height: {height} - weight: {weight}</div>
                <div className={styles.field}>hair: <pre>{stringify(hair)}</pre></div>
                <div className={styles.field}>domain: {domain} - ip: {ip}</div>
                <div className={styles.field}>address: <pre>{stringify(address)}</pre></div>
                <div className={styles.field}>macAddress: {macAddress} - university: {university}</div>
                <div className={styles.field}>bank: <pre>{stringify(bank)}</pre></div>
                <div className={styles.field}>company: <pre>{stringify(company)}</pre></div>
                <div className={styles.field}>ein: {ein}</div>
                <div className={styles.field}>ssn: {ssn}</div>
                <div className={styles.field}>userAgent: {userAgent}</div>
            </div>

            {/* навішую наш хендлер на подію онклік */}
            <button className={styles.btnShowPosts} onClick={clickHandler}>Show posts</button>
        </div>
    );
}

export default User;