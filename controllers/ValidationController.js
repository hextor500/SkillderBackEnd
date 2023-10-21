const { ValidationModel } = require('../models');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'LZMEYLz3SyW6Az9iCldg';

const validateUser = (req, res) => {
    const passwordBuffer = Buffer.from(req.body.passwordUser, 'utf8');
    const base64Password = passwordBuffer.toString('base64');
    req.body.passwordUser = base64Password;

    ValidationModel.validateUser(req.body.emailUser)
    .then((response) => {
        if(req.body.emailUser === response[0].emailUser && req.body.passwordUser === response[0].passwordUser){
            
            const tokenPayload = {
                emailUser: req.body.emailUser, 
              };

            const token = jwt.sign(tokenPayload,SECRET_KEY,{ expiresIn: '30m'});

            return res.status(201).send({ jwt: token, idUser: response[0].idUser});
        }
        return res.status(401).send({message: 'User not authorized'});
    })
    .catch((error) => {
        return res.status(500).send({message: `Error validating user`});
    });
};

const validateCompany = (req, res) => {
    const passwordBuffer = Buffer.from(req.body.passwordUser, 'utf8');
    const base64Password = passwordBuffer.toString('base64');
    req.body.passwordCompany = base64Password;

    ValidationModel.validateCompany(req.body.emailCompany)
    .then((response) => {
        if(req.body.emailCompany === response[0].emailCompany && req.body.passwordCompany === response[0].passwordCompany){
            
            const tokenPayload = {
                emailCompany: req.body.emailCompany, 
              };

            const token = jwt.sign(tokenPayload,SECRET_KEY,{ expiresIn: '30m'});

            return res.status(201).send({ jwt: token, idCompany: response[0].idCompany});
        }
        return res.status(401).send({message: 'User not authorized'});
    })
    .catch((error) => {
        return res.status(500).send({message: `Error validating user`});
    });
}

module.exports = {
    validateUser, 
    validateCompany
}