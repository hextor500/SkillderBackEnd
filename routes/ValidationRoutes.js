const express = require('express');
const router = express.Router();
const { ValidationController } = require('../controllers');

router.post('/authuser', ValidationController.validateUser);
router.post('/authcompany', ValidationController.validateCompany);

module.exports = router;