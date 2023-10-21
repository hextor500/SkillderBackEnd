const connection = require('../knexfile')['development'];

const database = require('knex')(connection);

const createUsersSkill = (usersSkills) => {
    return database('usersSkills')
    .insert(usersSkills);
};

const getUsersSkill = () => {
    return database('usersSkills')
    .select(
        'usersskills.idUser',
        'usersskills.idSkill',
        'skills.nameSkill',
        'users.nameUser',
        'users.lastNameUser',
        'users.aboutUser'
      )
      .from('usersskills')
      .join('skills', 'usersskills.idSkill', 'skills.idSkill')
      .join('users', 'usersskills.idUser', 'users.idUser');
};

const getOneUsersSkill = (userSkillId) => {
    return database('usersSkills')
    .where({ idUserSkill: userSkillId});
};

const putUsersSkill = (userSkillId, usersSkillInfo) => {
    return database('usersSkills')
    .where({ idUserSkill: userSkillId })
    .update(usersSkillInfo);
};

const patchUsersSkill = (userSkillId, usersSkillInfo) => {
    return database('usersSkills')
    .where({ idUserSkill: userSkillId })
    .update(usersSkillInfo);
};

const deleteUsersSkill = (userSkillId) => {
    return database('usersSkills')
    .where({ idUserSkill: userSkillId })
    .del();
};


module.exports = {
    createUsersSkill,
    getUsersSkill,
    getOneUsersSkill,
    putUsersSkill,
    patchUsersSkill,
    deleteUsersSkill
};