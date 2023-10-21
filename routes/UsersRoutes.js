const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');
const validateJWT = require('../utils/validate');

router.post('/', UsersController.createUser);

router.get('/', validateJWT, UsersController.getUsers);

router.get('/:id', validateJWT, UsersController.getOneUser);

router.put('/:id', validateJWT, UsersController.putUser);

router.patch('/:id', validateJWT, UsersController.patchUser);

router.delete('/:id', validateJWT, UsersController.deleteUser);

module.exports = router;