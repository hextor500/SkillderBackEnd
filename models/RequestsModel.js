const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const createRequest = (request) => {
    return database('requests')
    .insert(request);
};

const getRequestsAssigned = (query) => {
    return database('requests')
    .where(query);
};

const getOneRequest = (request) => {
    return database('requests')
    .where({ idRequest: request});
};

const putRequest = (request, requestInfo) => {
    return database('requests')
    .where({ idRequest: request })
    .update(requestInfo);
};

const patchRequest = (request, requestInfo) => {
    return database('requests')
    .where({ idRequest: request })
    .update(requestInfo);
};

const deleteRequest = (request) => {
    return database('requests')
    .where({ idRequest: request })
    .del();
};


module.exports = {
    createRequest,
    getRequestsAssigned,
    getOneRequest,
    putRequest,
    patchRequest,
    deleteRequest
}