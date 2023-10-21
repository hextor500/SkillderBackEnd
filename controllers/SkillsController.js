const { SkillsModel } = require('../models');


const createSkill = (req, res) => {
    SkillsModel.createSkill(req.body)
    .then((response) => {
        return res.status(201).send({message: response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error creating request`});
    });
};

const getSkills = (req, res) => {
    SkillsModel.getSkills()
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving requests information`});
    });
};

const getOneSkill = (req, res) => {
    SkillsModel.getOneSkill(req.params.id)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error retrieving request information`});
    });
};

const putSkill = (req, res) => {
    SkillsModel.putSkill(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating all the information from the request`});
    });
};

const patchSkill = (req, res) => {
    SkillsModel.patchSkill(req.params.id, req.body)
    .then((response) => {
        return res.status(200).send({response});
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).send({message: `Error updating the information defined`});
    });
};

const deleteSkill = (req, res) => {
    SkillsModel.deleteSkill(req.params.id)
    .then((response) => {
     return res.status(200).send({response});
     })
     .catch((error) => {
         console.log(error);
         return res.status(500).send({message: `Error deleting the request`});
     });
};

module.exports = {
    createSkill,
    getSkills, 
    getOneSkill, 
    putSkill,
    patchSkill,
    deleteSkill
}