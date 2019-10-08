function test(){
	console.log("you did it");
}

function adddata(user) {
	 
  // Initialize Firebase
  console.log("hello");
  
	 var ref = second('2').database().ref(User).child("Cool");
	 ref.child(user.email).set(user.email);
}