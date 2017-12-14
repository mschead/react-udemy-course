// arguments object - no longer bound with arrow functions

const add = function (a, b) {
	console.log(arguments);
	return a + b;
};

const addArrow = (a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 1));

// this keyword - no longer bound
// Use ES5 when needed

const user = {
	name: 'Marcos',
	cities: ['Florianoplx', "Palioza", 'Biguaci'],
	printPlacesLived: function () {
		// Results in error, because this doesn't bound
		// this.cities.forEach(function (city) {
		// 	console.log(this.name + 'has lived in' + city);
		// });

		this.cities.forEach((city) => {
			console.log(this.name + ' has lived in ' + city);
		});
	},
	printPlacesLivedArrow: () => {
		// Doesn't bound in the same way as above
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	},

	printPlacesLivedArrowCleaner() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

console.log(user.printPlacesLivedArrowCleaner());

// Challenge area

const multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the numbers have been multiplied
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());