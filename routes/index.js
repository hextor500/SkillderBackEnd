const express = require('express');
const router = express.Router();

const UsersRoutes = require('./UsersRoutes');
const UserSkills = require('./UserSkillsRoutes');
const SkillsRoutes = require('./SkillsRoutes');
const RequestsRoutes = require('./RequestsRoutes');
const CompanyRoutes = require('./CompanyRoutes');
const ValidationRoutes = require('./ValidationRoutes');

router.use('/users', UsersRoutes);
router.use('/userskills', UserSkills);
router.use('/skills', SkillsRoutes);
router.use('/requests', RequestsRoutes);
router.use('/companies', CompanyRoutes);
router.use('/login', ValidationRoutes);

module.exports = router;