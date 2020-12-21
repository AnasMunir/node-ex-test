'use strict'

const validateInput = (input) => {
	const specialCharacterRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	const doesInputHaveSpecialCharacters = specialCharacterRegex.test(input);
	return doesInputHaveSpecialCharacters;
}

module.exports = {
	validateInput
}