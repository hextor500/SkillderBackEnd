const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const createCompany = (user) => {
    return database('company')
    .insert(user);
};

const getCompanies = () => {
    return database('company');
};

const getOneCompany = (companyId) => {
    return database('company')
    .where({ idCompany: companyId});
};

const putCompany = (companyId, companyInfo) => {
    return database('company')
    .where({ idCompany: companyId })
    .update(companyInfo);
};

const patchCompany = (companyId, companyInfo) => {
    return database('company')
    .where({ idCompany: companyId })
    .update(companyInfo);
};

const deleteCompany = (companyId) => {
    return database('company')
    .where({ idCompany: companyId })
    .del();
};


module.exports = {
    createCompany,
    getCompanies,
    getOneCompany,
    putCompany,
    patchCompany,
    deleteCompany
}