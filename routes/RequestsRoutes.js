const express = require('express');
const router = express.Router();
const { RequestsController } = require('../controllers');
const validateJWT = require('../utils/validate');

router.post('/', validateJWT, RequestsController.createRequest);

router.get('/', validateJWT, RequestsController.getRequestsAssigned);

router.get('/:id', validateJWT, RequestsController.getOneRequest);

router.put('/:id', validateJWT, RequestsController.putRequest);

router.patch('/:id', validateJWT, RequestsController.patchRequest);

router.delete('/:id', validateJWT, RequestsController.deleteRequest);


module.exports = router;