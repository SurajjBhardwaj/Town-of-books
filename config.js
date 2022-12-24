const firebase= require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyA1z6Nq-njg65ZENFfVq_ylKtDrVal2efI",
    authDomain: "townofbooks.firebaseapp.com",
    databaseURL: "https://townofbooks-default-rtdb.firebaseio.com",
    projectId: "townofbooks",
    storageBucket: "townofbooks.appspot.com",
    messagingSenderId: "256423268555",
    appId: "1:256423268555:web:90d3bcba541cd3d9870b4e"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  const User = db.collection("Users");
  module.exports=User;
