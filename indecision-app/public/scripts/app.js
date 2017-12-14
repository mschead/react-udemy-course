'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
// ES6 doesn't allow to redefine variable
// let nameLet = 'Jullie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
// ES6 doesn't allow to redefine and reassign variable
//nameConst = 'Gunther';
console.log('nameConst', nameConst);

// Normal scoping in functions
function getPetName() {
	var petName = 'Hal';
	return petName;
}

// Results in undefined, out of scope
console.log(petName);

var petName = getPetName();
// console.log(petName);


// Wide scoping if and for/while
var varFullName = 'Mike Smith';

if (varFullName) {
	var varFirstName = varFullName.split(' ')[0];
	console.log(varFirstName);
}

console.log(varFirstName);

// Block scoping (let and const)
var constFullName = 'Andrews Mead';
var letFirstName = 'Marcos';

if (constFullName) {
	var _letFirstName = constFullName.split(' ')[0];
	console.log(_letFirstName);
}

// Different value from the variable inside the if
console.log(letFirstName);
