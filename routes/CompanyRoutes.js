const express = require('express');
const router = express.Router();
const { CompanyController } = require('../controllers'); 
const validateJWT = require('../utils/validate');

router.post('/', CompanyController.createCompany);

router.get('/', validateJWT, CompanyController.getCompanies);

router.get('/:id', validateJWT, CompanyController.getOneCompany);

router.put('/:id', validateJWT, CompanyController.putCompany);

router.patch('/:id', validateJWT, CompanyController.patchCompany);

router.delete('/:id', validateJWT, CompanyController.deleteCompany);


module.exports = router;