'use strict';

// library imports
const http = require('http');
const express = require('express');

// custom imports
const photosRouter = require('./src/routes/index.js');
const { PORT } = require('./src/config.js');


const app = express();
app.use(express.json());

app.use('/photos', photosRouter);


app.use('/', (req, res) => {
	const instructions = {
		"Details route": "/photos/{id}",
		"Search route": "/photos/search?title={search-term}"
	}
	res.json(instructions);
});

const server = http.createServer(app);
server.listen(PORT);

console.debug(`Server listening on port http://localhost:${PORT}`);