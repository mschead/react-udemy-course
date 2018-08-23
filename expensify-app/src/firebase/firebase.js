import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAspALbI3ocMSqVIpwMaQGEZAED7fUfEVI",
    authDomain: "expensify-29e7b.firebaseapp.com",
    databaseURL: "https://expensify-29e7b.firebaseio.com",
    projectId: "expensify-29e7b",
    storageBucket: "expensify-29e7b.appspot.com",
    messagingSenderId: "886461948677"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Marcos Schead',
    age: 27,
    isSingle: true,
    location: {
        city: 'Floripa',
        country: 'Brazil'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(28);
database.ref('location/city').set('Curitiba');

database.ref('attributes').set({
    height: 170,
    weight: 60
});

console.log('I made a request to change the data.');
