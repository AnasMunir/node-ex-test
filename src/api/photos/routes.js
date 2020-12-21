'use strict';
const express = require('express');
const photoService = require('./services.js');
const router = express.Router();

router.get('/', photoService.getAllPhotos);
router.get('/search', photoService.searchPhotos);
router.get('/:id', photoService.getPhoto);

module.exports = router;