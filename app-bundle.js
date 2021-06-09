firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
      // User is signed in
	  var user = firebase.auth().currentUser;
	  document.getElementById("user").innerHTML = "Welcome: " + user;
	  document.getElementById("loger").style.display = "none";
	  document.getElementById("loged").style.display = "flex";
	} else {
	  // No user is signed in.
	  document.getElementById("loger").style.display = "flex";
	  document.getElementById("loged").style.display = "none";
	}
  });
  
function login(){
    var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  window.alert("Error : " + errorMessage);
	});
}
  
function logout(){
   firebase.auth().signOut();
}

// function signUp(){
//     var userEmail = document.getElementById("email_field").value;
// 	var userPass = document.getElementById("password_field").value;
// 	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
// 	  // Handle Errors here.
// 	  var errorCode = error.code;
// 	  var errorMessage = error.message;
// 	  window.alert("Error : " + errorMessage);
// 	});
// }