const { request } = require('express');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'LZMEYLz3SyW6Az9iCldg';

const validateJWT = (req, res, next) => {

    const authHeader = req.get('authorization');
    
    if (!authHeader) {
        return res.status(401).send('Unauthorized');
      }
    
    const accessToken = authHeader.split(' ')[1];

    jwt.verify(accessToken, SECRET_KEY, (error, decode) => {
        if(error){
            return res.status(401).send('Unauthorized');
        } else {
            next()
        }
    });
    
};

module.exports = validateJWT;