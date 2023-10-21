const { CompanyModel } = require('../models');

const createCompany = (req, res) => {

    const passwordBuffer = Buffer.from(req.body.passwordUser, 'utf8');
    const base64Password = passwordBuffer.toString('base64');

    req.body.passwordCompany = base64Password;

    CompanyModel.createCompany(req.body)
    .then((response) => {
        return res.status(201).send({message: response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error creating request`});
    });
};

const getCompanies = (req, res) => {
    CompanyModel.getCompanies()
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving requests information`});
    });
};

const getOneCompany = (req, res) => {
    CompanyModel.getOneCompany(req.params.id)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving request information`});
    });
};

const putCompany = (req, res) => {
    CompanyModel.putCompany(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating all the information from the request`});
    });
};

const patchCompany = (req, res) => {
    CompanyModel.patchCompany(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating the information defined`});
    });
};

const deleteCompany = (req, res) => {
    CompanyModel.deleteCompany(req.params.id)
    .then((response) => {
     return res.status(200).send({response});
     })
     .catch((error) => {
         console.log(error);
         return res.status(500).send({message: `Error deleting the request`});
     });
};

module.exports = {
    createCompany,
    getCompanies, 
    getOneCompany, 
    putCompany,
    patchCompany,
    deleteCompany
}