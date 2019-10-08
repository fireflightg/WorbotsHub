
firebase.auth().onAuthStateChanged(function(user,displayName) {
  if (user) {


    var user = firebase.auth().currentUser;
    var x = document.getElementById("Signinout");
   x.style.display = "none";

   var body = document.getElementById('body');
body.style.filter = "blur(0px)";
    if(user != null){
      
      var email_id = user.email;
      var username = email_id.replace("@gmail.com", " ");
      if(user.displayName == null){
      var finddata = firebase.database().ref("Users").child(username);
      
    }
    else{
      
      var finddata = firebase.database().ref("Users").child(user.displayName);
    }
      var data = finddata.child("name");
      var percent = finddata.child("complete");
      
          if(finddata == null){
          window.location = "index.html";
    

       
      }
         
          document.getElementById("display").innerHTML = "Welcome User : " + username;
     
          
        
          document.getElementById("display").innerHTML = "Welcome User : " + user.displayName;
      

      

    }

  } else {
    
    // No user is signed in.


    

  }
});
// window.onload = function v(){
//  firebase.auth().signOut(); 
// }

function login(){
  var int  = null;
  var userEmail = document.getElementById('user').value;
  var userPass = document.getElementById('pass').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  alert('Incorrect username or password.');

    // ...
  });
  if(int == null){
    return;
  }


}
function adminlogin(){
  var int  = null;
  var userEmail = document.getElementById('user').value;
  var email = userEmail.defaultValue;
  var userPass = document.getElementById('pass').value;
  var pass = userPass.defaultValue;
  var ref = firebase.database().ref().child("Admin");
  ref.on('value',snap=>{
snap.forEach(em =>{
console.log(em.val());
console.log(em.key);
 if(userEmail == em.val()){
  int = true;
 }


});
if(int == null){
    alert("Not Admin");
    return;
  }
if(userPass == pass){
  alert("enter password");
  return;
}
if(userEmail == email){
  alert("enter email");
  return;
}
  else{
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

  alert('Incorrect username or password.');

    // ...
  }).then(function(){
    window.location = "Admin.html";
  });
  }

  });
  // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;

  // alert('Incorrect username or password.');

  //   // ...
  // });
  
}

function logout(){

  firebase.auth().signOut();
  window.location = "index.html"

}
function signup(){

  var userEmail = document.getElementById('user').value;
  var defuserEmail = document.getElementById('user').defaultValue;
  var userPass = document.getElementById('pass').value;
  var confirm = document.getElementById('confirm').value;
  var defconfirm = document.getElementById('confirm').defaultValue;
  var UserPassdefualt = document.getElementById('pass').defaultValue; 
  var drname = document.getElementById('Name').defaultValue; 
  var name = document.getElementById('Name').value;

  if(userEmail == defuserEmail || !userEmail.includes("@") ){
    alert("Enter a valid email");
    return;
  }
  if(userPass == UserPassdefualt){
    alert("Enter a password");
    return;
  }
  if(userPass != confirm){
    alert("password does not match");
    return;
  }
  if(confirm == defconfirm){
    alert("confirm password");
    return;
  }
  if(name == drname){
    alert("type a name");
    return;
  }
  else{
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(user) {
    var user = firebase.auth().currentUser;
    logUser(user); // Optional
}, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
});

 function logUser(user,displayName) {
  user.updateProfile({
      displayName: name
      
    }).then(function(user) {
   
  }).catch(function(error) {
  
  console.log("OOOF")
})
 
  
  var defusername = userEmail.replace("@gmail.com"," ")
    var reft = firebase.database().ref().child("Users");
     
      
    var ref = reft.child(name);
  
    var obj = {
        "user": user,
        
    }
    
    ref.child("Email").set(user.email);
    ref.child("password").set(userPass);
    ref.child("name").set("true");
    ref.child("complete").on('value', snap=>{
        if(snap.val()<= 0){
          ref.child("complete").set(0);
        }
    });
    ref.child("id").set(Math.floor(Math.random(100,999) * 1000));
    var d = new Date();
    var n = d.getMonth()+"-"+d.getDate()+"-"+d.getFullYear();
    ref.child("Attend").set("Date Created: "+ n);
    
   
}

}
}
function checklogin(user){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    var user = firebase.auth().currentUser;
    
    if(user != null){
      window.location = "Dashboard.html"
      let  j = 0;
      var email_id = user.email;
      
      

    }

  } else {
    
    // No user is signed in.


    

  }
});
}

