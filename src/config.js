'use strict';

// constants
const PORT = process.env.PORT || 8080;

// env
const ENVIRONMENT = {
	CURRENT: process.env.environment || 'local',
	STAGING: 'staging',
	LIVE: 'live'
};

module.exports = {
	PORT,
	ENVIRONMENT
}