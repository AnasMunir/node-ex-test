'use strict';
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

function getAllPhotos(req, res) {
	res.status(200).json('inside photos');
}
const crap = (req, res) => {
	res.status(200).json('inside photos');
}
async function getPhoto(req, res) {
	console.log('shit load of crap');
	try {
		const { id } = req.params;
		const paramHaveSpecialCharacters = validateInput(id);
		if (paramHaveSpecialCharacters) {
			const errorResp = {
				"error": "Bad Request",
				"message": "Invalid request payload input"
			}
			return res.status(400).json(errorResp);
		}
		const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
		const result = await response.json();
		console.log('response --', result);
		if (Object.entries(result).length === 0) {
			return res.status(404).json(
				{
					"error": "Not Found",
					"message": `No photos found with id ${id}`
				}
			);
		}
		res.status(200).json(result);
	} catch (error) {
		const errorResp = {
			"error": "Bad Request",
			"message": "Invalid request payload input"
		}
		return res.status(400).json(errorResp);
	}
}

async function searchPhotos(req, res) {
	console.log("I'm here");
	const { title } = req.query;

	if (title) {
		const queryParamHaveSpecialCharacters = validateInput(title);
		if (queryParamHaveSpecialCharacters) {
			const errorResp = {
				"error": "Bad Request",
				"message": "Invalid request payload input"
			}
			return res.status(400).json(errorResp);
		}
		console.log('should not execute if 400');
		const regex = new RegExp(`${title}`);
		const response = await fetch('https://jsonplaceholder.typicode.com/photos');
		const json = await response.json();
		const results = json.filter(item => regex.test(item.title));
		const resp = {
			results: results
		};
		// console.log('results', results);
		res.status(200).json(resp);
	} else {
		const resp = {
			results: []
		};
		res.status(200).json(resp);
	}
}

const validateInput = (input) => {
	const specialCharacterRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const doesInputHaveSpecialCharacters = specialCharacterRegex.test(input);
	return doesInputHaveSpecialCharacters;
}
// module.exports = router;
module.exports = {
	crap: crap,
	getPhoto: getPhoto,
	getAllPhotos: getAllPhotos,
	searchPhotos: searchPhotos
};