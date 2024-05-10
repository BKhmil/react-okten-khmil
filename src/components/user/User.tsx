import {IUser} from "../../types/users/IUser";
import stringify from "json-stringify-pretty-compact";
import {FC, PropsWithChildren} from "react";
import styles from './user.module.css';

interface IProps extends PropsWithChildren, IUser {
}

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

    const  clickHandler = () => {
        if (lift) {
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
            <button className={styles.btnShowPosts} onClick={clickHandler}>Show posts</button>
        </div>
    );
}

export default User;