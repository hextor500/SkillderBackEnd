const { UserSkillsModel } = require('../models');

const createUserSkill = (req, res) => {
    UserSkillsModel.createUsersSkill(req.body)
    .then((response) => {
        return res.status(201).send({message: response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error creating request`});
    });
};

const getUsersSkills = (req, res) => {
    UserSkillsModel.getUsersSkill()
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving requests information`});
    });
};

const getOneUserSkills = (req, res) => {
    UserSkillsModel.getOneUserSkills(req.params.id)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving request information`});
    });
};

const putUserSkills = (req, res) => {
    UserSkillsModel.putUsersSkill(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating all the information from the request`});
    });
};

const patchUserSkills = (req, res) => {
    UserSkillsModel.patchUsersSkill(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating the information defined`});
    });
};

const deleteUserSkills = (req, res) => {
    UserSkillsModel.deleteUsersSkill(req.params.id)
    .then((response) => {
     return res.status(200).send({response});
     })
     .catch((error) => {
         console.log(error);
         return res.status(500).send({message: `Error deleting the request`});
     });
};

module.exports = {
    createUserSkill,
    getUsersSkills, 
    getOneUserSkills, 
    putUserSkills,
    patchUserSkills,
    deleteUserSkills
}