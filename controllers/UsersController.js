const { UsersModel } = require('../models')

const createUser = (req, res) => {
    const passwordBuffer = Buffer.from(req.body.passwordUser, 'utf8');
    const base64Password = passwordBuffer.toString('base64');

    req.body.passwordUser = base64Password;

    UsersModel.createUser(req.body)
    .then((response) => {
        return res.status(201).send({message: response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error creating user`});
    });
};

const getUsers = (req, res) => {
    UsersModel.getUsers()
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving users information`});
    });
};

const getOneUser = (req, res) => {
    UsersModel.getOneUser(req.params.id)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving user information`});
    });
};

const putUser = (req, res) => {
    UsersModel.putUser(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating all the information from the user`});
    });
};

const patchUser = (req, res) => {
    UsersModel.patchUser(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating the information defined`});
    });
};

const deleteUser = (req, res) => {
   UsersModel.deleteUser(req.params.id)
   .then((response) => {
    return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error deleting the user`});
    });
};

module.exports = {
    createUser,
    getUsers, 
    getOneUser, 
    putUser,
    patchUser,
    deleteUser
}
