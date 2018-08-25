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
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Floripa',
        country: 'Brazil'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Curitiba'
});

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed.');
//     }).catch((e) => {
//         console.log('Did not remove data.', e);
//     });
