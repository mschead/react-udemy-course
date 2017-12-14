'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
	console.log(arguments);
	return a + b;
};

var addArrow = function addArrow(a, b) {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));

// this keyword - no longer bound
// Use ES5 when needed

var user = {
	name: 'Marcos',
	cities: ['Florianoplx', "Palioza", 'Biguaci'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		// Results in error, because this doesn't bound
		// this.cities.forEach(function (city) {
		// 	console.log(this.name + 'has lived in' + city);
		// });

		this.cities.forEach(function (city) {
			console.log(_this.name + ' has lived in ' + city);
		});
	},
	printPlacesLivedArrow: function printPlacesLivedArrow() {
		// Doesn't bound in the same way as above
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	},

	printPlacesLivedArrowCleaner: function printPlacesLivedArrowCleaner() {
		var _this2 = this;

		return this.cities.map(function (city) {
			return _this2.name + ' has lived in ' + city;
		});

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

console.log(user.printPlacesLivedArrowCleaner());

// Challenge area

var multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the numbers have been multiplied
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply: function multiply() {
		var _this3 = this;

		return this.numbers.map(function (number) {
			return number * _this3.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
