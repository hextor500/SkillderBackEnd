const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const validateUser = (emailUser) => {
    return database('users')
    .select(
        'idUser',
        'emailUser',
        'passwordUser'
      )
    .where({emailUser: emailUser});
};

const validateCompany = (emailCompany) => {
    return database('company')
    .select(
        'idCompany',
        'emailCompany',
        'passwordCompany'
      )
    .where({emailCompany: emailCompany});;
};

module.exports = {
    validateUser,
    validateCompany
}