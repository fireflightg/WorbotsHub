function signpopup() {
	var x = document.getElementById("Signinout");
var body = document.getElementById('body');
body.style.filter = "blur(20px)";
x.style.filter = "none";
x.style.display = "block";


	// body...
}
function signpopdown() {
  var x = document.getElementById("Signinout");
var body = document.getElementById('body');
var text = document.getElementById("he");
body.style.filter = "blur(0px)";
x.style.filter = "block";
x.style.display = "none";
text.innerText = "Sign Up";


  // body...
}
window.onload = function hide(){
	var x = document.getElementById("Signinout");
	var y = document.getElementById("Signin")
	var z = document.getElementById("signoutclick");
  var t = document.getElementById('Signinadmin');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
    if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }


}
function signinswitch(){
var x = document.getElementById("confirm");
var signupbutton = document.getElementById("Signup"); 
var signinbutton = document.getElementById("Signin");
var signinbuttona = document.getElementById("Signinadmin");  
var z = document.getElementById("signoutclick");
var y = document.getElementById("singinclick");
var v = document.getElementById("Name");
var text = document.getElementById("he");
x.style.display = "none";
signupbutton.style.display = "none";
signinbutton.style.display = "block";
signinbuttona.style.display = "block";
v.style.display = "none";
y.style.display = "none";
z.style.display = "block"
text.innerText = "Sign In";
}
function back(){
	var x = document.getElementById("confirm");
var signupbutton = document.getElementById("Signup"); 
var signinbutton = document.getElementById("Signin");
var signinbuttona = document.getElementById("Signinadmin");  
var z = document.getElementById("signoutclick");
var y = document.getElementById("singinclick");
var v = document.getElementById("Name");
var text = document.getElementById("he");
x.style.display = "block";
signupbutton.style.display = "block";
signinbutton.style.display = "none";
signinbuttona.style.display = "none";
y.style.display = "block";
v.style.display = "block";
z.style.display = "none";
text.innerText = "Sign Up";
}
