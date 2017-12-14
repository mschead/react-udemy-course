'use strict';

var square = function square(x) {
	return x * x;
};

// arrow functions can't be anonymous like above
var squareArrow = function squareArrow(x) {
	return x * x;
};

var squareArrowExp = function squareArrowExp(x) {
	return x * x;
};

console.log(squareArrow(8));
console.log(squareArrowExp(3));

// Challenge - User arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

var getFirstName = function getFirstName(fullName) {
	return fullName.split(' ')[0];
};

var getFirstNameShort = function getFirstNameShort(fullName) {
	return fullName.split(' ')[0];
};

console.log(getFirstName('Marcos Schead'));
console.log(getFirstNameShort('Mike Smith'));
