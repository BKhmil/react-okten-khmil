// базова урла до апі
const baseUrl: string = 'https://jsonplaceholder.typicode.com';

// об'єкт з ендпоінтами
const urls = {
    // для юзерів
    users: {
        // поле base містить базовий ендпоінт
        base: '/users',
        // поле byId містить стрілку яка примає id'шник та повертає базову_урлу/id
        // ну і так, це взагалі-то метод
        byId: (id: number): string => urls.users.base + '/' + id
    },
    // для постів
    posts: {
        base: '/posts',
        byId: (id: number): string => urls.posts.base + '/' + id
    }
};

export {
    baseUrl,
    urls
}