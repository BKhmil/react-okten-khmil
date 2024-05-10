import {FC, useEffect, useState} from "react";
import {IUser} from "../../types/users/IUser";
import  {getAllUsers} from "../../services/users.service";
import User from "../user/User";
import styles from './users.module.css';

type IProps = {lift?: (userId: number) => void};

const Users: FC<IProps> = ({lift}) => {
    const [usersData, setUsersData] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsersData(data.users));
    }, []);

    return <div className={styles.usersWrapper}>
        <div className={styles.usersTitle}>USERS</div>
        {usersData.map((user, index) => <User
            key={index}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            maidenName={user.maidenName}
            age={user.age}
            gender={user.gender}
            email={user.email}
            phone={user.phone}
            username={user.username}
            password={user.password}
            birthDate={user.birthDate}
            image={user.image}
            bloodGroup={user.bloodGroup}
            height={user.height}
            weight={user.weight}
            eyeColor={user.eyeColor}
            hair={user.hair}
            domain={user.domain}
            ip={user.ip}
            address={user.address}
            macAddress={user.macAddress}
            university={user.university}
            bank={user.bank}
            company={user.company}
            ein={user.ein}
            ssn={user.ssn}
            userAgent={user.userAgent}
            lift={lift}
        />)}
    </div>;
}

export default Users;