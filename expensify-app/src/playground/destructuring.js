//
// Object destructuring
//

const person = {
  // name: 'Schead',
  age: 27,
  location: {
    city: 'Florianoplx',
    temp: '45'
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName); // Penguin, Self-Published


//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadeplhia', 'Pennsylvania', '19147']
const [, yourCity, state = 'New York'] = address;
console.log(`You are in ${yourCity} ${state}.`);

// grab first and third items using array destructuring
const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);