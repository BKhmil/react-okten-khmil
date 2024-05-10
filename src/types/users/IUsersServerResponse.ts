import {IUser} from "./IUser";

// я протипізував цілу відповідь з даміджейсону
export type IUsersServerResponse = {
    users: IUser[],
    total: 100,
    skip: 0,
    limit: 30
};