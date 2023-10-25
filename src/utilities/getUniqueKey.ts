export const getUniqueKey = () => {
    const length = 21;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters[Math.floor(Math.random() * characters.length)];
    }

    return id;
};
