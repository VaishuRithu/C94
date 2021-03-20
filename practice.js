//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyApgTDFL5aXLbtaaOibnJe8pHD31pkgSc0",
  authDomain: "kwitter2-45be3.firebaseapp.com",
  databaseURL: "https://kwitter2-45be3-default-rtdb.firebaseio.com",
  projectId: "kwitter2-45be3",
  storageBucket: "kwitter2-45be3.appspot.com",
  messagingSenderId: "885946483098",
  appId: "1:885946483098:web:87bd6f547a19b658367a23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      });
  }