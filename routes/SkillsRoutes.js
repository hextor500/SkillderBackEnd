const express = require('express');
const router = express.Router();
const { SkillsController } = require('../controllers')
const validateJWT = require('../utils/validate');

router.post('/', validateJWT, SkillsController.createSkill);

router.get('/', validateJWT, SkillsController.getSkills);

router.get('/:id', validateJWT, SkillsController.getOneSkill);

router.put('/:id', validateJWT, SkillsController.putSkill);

router.patch('/:id', validateJWT, SkillsController.patchSkill);

router.delete('/:id', validateJWT, SkillsController.deleteSkill);


module.exports = router;