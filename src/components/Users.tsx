import {AxiosResponse} from "axios";
import {IUsersServerResponse} from "../types/users/IUsersServerResponse";
import {useEffect, useState} from "react";
import {IUser} from "../types/users/IUser";

type IProps = {getData: () => Promise<AxiosResponse<IUsersServerResponse>>};

function Users({getData}: IProps) {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        // getData().then(data => setUsers(data.users))
    });

    return <>

    </>;
}

export default Users;