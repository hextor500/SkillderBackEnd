const express = require('express');
const router = express.Router();
const { UserSkillsController } = require('../controllers')

const validateJWT = require('../utils/validate');

router.post('/', validateJWT, UserSkillsController.createUserSkill);

router.get('/', validateJWT, UserSkillsController.getUsersSkills);

router.get('/:id', validateJWT, UserSkillsController.getOneUserSkills);

router.put('/:id', validateJWT, UserSkillsController.putUserSkills);

router.patch('/:id', validateJWT, UserSkillsController.patchUserSkills);

router.delete('/:id', validateJWT, UserSkillsController.deleteUserSkills);


module.exports = router;