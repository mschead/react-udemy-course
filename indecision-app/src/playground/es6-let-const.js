var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// ES6 doesn't allow to redefine variable
// let nameLet = 'Jullie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
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

const petName = getPetName();
// console.log(petName);


// Wide scoping if and for/while
var varFullName = 'Mike Smith';

if (varFullName) {
	var varFirstName = varFullName.split(' ')[0];
	console.log(varFirstName);
}

console.log(varFirstName);


// Block scoping (let and const)
const constFullName = 'Andrews Mead';
let letFirstName = 'Marcos';

if (constFullName) {
	let letFirstName = constFullName.split(' ')[0];
	console.log(letFirstName);
}

// Different value from the variable inside the if
console.log(letFirstName);