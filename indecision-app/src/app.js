// import './utils.js';
import { square, add } from './utils.js'

console.log('app.js is running!');
console.log(square(4));
console.log(add(100, 23));

// person.js
// named export isAdult(18) - true if 18 and over, otherwise false
// named export canDrink(18) - true if 15 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

import { isAdult, canDrink } from './person.js'

console.log(isAdult(17));
console.log(canDrink(20));
