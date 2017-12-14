const square = function(x) {
	return x * x
};

// arrow functions can't be anonymous like above
const squareArrow = (x) => {
	return x * x
};

const squareArrowExp = (x) => x * x;

console.log(squareArrow(8));
console.log(squareArrowExp(3));

// Challenge - User arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Marcos Schead'));
console.log(getFirstNameShort('Mike Smith'));