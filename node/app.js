const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('In the middlewear!');
    res.send("<h1>Hey there!</h1>")
});

const server = http.createServer(app);

server.listen(3000);