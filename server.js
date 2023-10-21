const express = require('express');
const server = express();
const port = 3000;
const Routes = require('./routes');

server.use(express.json());

server.use('/api/v1', Routes);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
