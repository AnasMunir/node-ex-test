'use strict';
// const express = require('express');
// const photoService = require('../../services/photos');
// const router = express.Router();


// const app = express();

// //
// router.get('/', photoService.crap);
// router.get('/search', photoService.searchPhotos);
// router.get('/:id', photoService.getPhoto);

const photosRouter = require('../api/photos/routes.js');

module.exports = photosRouter;
