import firebase from 'firebase/app'

import "firebase/firestore"
import "firebase/auth"



var firebaseConfig = {
    apiKey: "AIzaSyCR64mriO7Fc8eqnyhr1NkP-8KVh2jYAcs",
    authDomain: "bleh-2a2c2.firebaseapp.com",
    databaseURL: "https://bleh-2a2c2.firebaseio.com",
    projectId: "bleh-2a2c2",
    storageBucket: "bleh-2a2c2.appspot.com",
    messagingSenderId: "937404537489",
    appId: "1:937404537489:web:42536f089571beb584bd30"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;