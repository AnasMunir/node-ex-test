'use strict';

// library imports
const http = require('http');
const express = require('express');

// custom imports
const photosRouter = require('./src/routes/index.js');


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use('/photos', photosRouter);


app.use('/', (req, res) => {
	res.send('home');
});

const server = http.createServer(app);
server.listen(PORT);

console.debug(`Server listening on port http://localhost:${PORT}`);