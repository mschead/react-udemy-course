// import './utils.js';
import subtract, { square, add } from './utils.js'

console.log('app.js is running!');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 20));

import isSenior, { isAdult, canDrink } from './person.js'

console.log(isAdult(17));
console.log(canDrink(20));
console.log(isSenior(64));

// Setting the default export and function
// Grab the default and call it