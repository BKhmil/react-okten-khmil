import {IPost} from "./IPost";

export type IPostsServerResponse = {
    posts: IPost[],
    total: number,
    skip: number,
    limit: number
};