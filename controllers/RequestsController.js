const { RequestsModel } = require('../models');

const createRequest = (req, res) => {
    RequestsModel.createRequest(req.body)
    .then((response) => {
        return res.status(201).send({message: response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error creating request`});
    });
};

const getRequestsAssigned = (req, res) => {
    RequestsModel.getRequestsAssigned(req.query)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving requests information`});
    });
};

const getOneRequest = (req, res) => {
    RequestsModel.getOneRequest(req.params.id)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving request information`});
    });
};

const putRequest = (req, res) => {
    RequestsModel.putRequest(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating all the information from the request`});
    });
};

const patchRequest = (req, res) => {
    RequestsModel.patchRequest(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating the information defined`});
    });
};

const deleteRequest = (req, res) => {
    RequestsModel.deleteRequest(req.params.id)
    .then((response) => {
     return res.status(200).send({response});
     })
     .catch((error) => {
         console.log(error);
         return res.status(500).send({message: `Error deleting the request`});
     });
};

module.exports = {
    createRequest,
    getRequestsAssigned, 
    getOneRequest, 
    putRequest,
    patchRequest,
    deleteRequest
}