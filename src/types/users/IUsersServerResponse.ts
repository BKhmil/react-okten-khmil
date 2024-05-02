import {IUser} from "./IUser";

export type IUsersServerResponse = {
    users: IUser[],
    total: 100,
    skip: 0,
    limit: 30
};