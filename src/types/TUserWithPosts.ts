import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

export type TUserWithPosts = IUser & {posts: IPost[]};