import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

export type TPostWithComments = IPost & {comments: IComment[]};