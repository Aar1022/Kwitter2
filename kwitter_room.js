
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0kLuuHkHQWgiuRUQxpXXUPO-wpO8FeHY",
      authDomain: "kwitter-1dad7.firebaseapp.com",
      databaseURL: "https://kwitter-1dad7-default-rtdb.firebaseio.com",
      projectId: "kwitter-1dad7",
      storageBucket: "kwitter-1dad7.appspot.com",
      messagingSenderId: "62331127310",
      appId: "1:62331127310:web:a8f7504aca0c4ba62f9e5f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
