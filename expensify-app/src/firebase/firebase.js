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

firebase.database().ref().set({
    name: 'Marcos Schead'
});