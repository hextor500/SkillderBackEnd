const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const createSkill = (skills) => {
    return database('skills')
    .insert(skills);
};

const getSkills = () => {
    return database('skills');
};

const getOneSkill = (skillId) => {
    return database('skills')
    .where({ idSkill: skillId});
};

const putSkill = (skillId, skillInfo) => {
    return database('skills')
    .where({ idSkill: skillId })
    .update(skillInfo);
};

const patchSkill = (skillId, skillInfo) => {
    return database('skills')
    .where({ idSkill: skillId })
    .update(skillInfo);
};

const deleteSkill = (skillId) => {
    return database('skills')
    .where({ idSkill: skillId })
    .del();
};


module.exports = {
    createSkill,
    getSkills,
    getOneSkill,
    putSkill,
    patchSkill,
    deleteSkill
};