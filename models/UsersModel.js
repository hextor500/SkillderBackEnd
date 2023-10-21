const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const createUser = (user) => {
    return database('users')
    .insert(user);
};

const getUsers = () => {
    return database('users');
};

const getOneUser = (userId) => {
    return database('users')
    .where({ idUser: userId});
};

const putUser = (userId, userInfo) => {
    return database('users')
    .where({ idUser: userId })
    .update(userInfo);
};

const patchUser = (userId, userInfo) => {
    return database('users')
    .where({ idUser: userId })
    .update(userInfo);
};

const deleteUser = (userId) => {
    return database('users')
    .where({ idUser: userId })
    .del();
};


module.exports = {
    createUser,
    getUsers,
    getOneUser,
    putUser,
    patchUser,
    deleteUser
}