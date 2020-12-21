'use strict';

// library imports
const http = require('http');
const express = require('express');
const cors = require('cors');

// custom imports
const photosRouter = require('./src/routes/index.js');


const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:8100' }));

app.use('/photos', photosRouter);


app.use('/', (req, res) => {
	res.send('home');
});

const server = http.createServer(app);
const port = 8100;
server.listen(port);

console.debug(`Server listening on port http://localhost:${port}`);