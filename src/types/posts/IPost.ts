export type IPost = {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
};
// звичайна типізація