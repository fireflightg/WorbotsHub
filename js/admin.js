const firebaseConfig = {
    apiKey: "AIzaSyD3Ya5UbbRCA5S5hzY2W2qspza4wLcNIz4",
    authDomain: "project-smrt-60034.firebaseapp.com",
    databaseURL: "https://project-smrt-60034.firebaseio.com",
    projectId: "project-smrt-60034",
    storageBucket: "project-smrt-60034.appspot.com",
    messagingSenderId: "392351756064",
    appId: "1:392351756064:web:fd11d078c6c87fca"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 firebase.auth().onAuthStateChanged(function(user,displayName,photoURL) {
  if (user) {


    var user = firebase.auth().currentUser;
    

   

    if(user != null){
    	var Welcome = document.getElementById('Welcome');
      Welcome.innerText = "Welcome "+ user.displayName;
    	
    }






}
else{
    console.log("oof");	
    }
  
});
window.onload = function myFunction() {
  myVar = setTimeout(alertFunc, 500);
}
function alertFunc(){
var ref = firebase.database().ref().child("Users");
    	ref.on('value',snap=>{
    	snap.forEach(child=>{
    		var li = document.createElement('li');
    		var a = document.createElement('a');
    		var di = document.getElementById('uka');
    	
    		a.setAttribute("href", "#");
    		a.setAttribute("class", "uk-accordion-title");
    		var div = di.cloneNode(true);
    		
    		a.innerText = child.key;
    		
    		
    		console.log(child.key);
    		var gr = firebase.database().ref().child("Users");
  			var person = gr.child(child.key);
  			var attend = person.child("Attend");
  			attend.on('value',snap=>{
  				
  				div.innerText = JSON.stringify(snap.val(), null, 3);
  				
  				
  			});

  			li.appendChild(a);
    		
    		var ul = document.getElementById("ahold");
  			ul.appendChild(li);
  			a.appendChild(div);
  			
        
  			
  			

    	});

    });
    	

    
        
    }

    function logout(){

  firebase.auth().signOut();
  window.location = "index.html"

}
    // function open(){
    // 		var d = this.id;
    // 		console.log(d);
    // 		var div = document.getElementsByClassName('contain');
    // 		var full = d.replace("b","");
    // 		div.setAttribute("id", full);
    		
    //  //    var gr = firebase.database().ref().child("Users");
  		// 	// var person = gr.child(child.key);
  		// 	// var attend = person.child("Attend");
  		// 	// attend.on('value',snap=>{
  		// 	// 	var p = document.createElement
  		// 	// 	p.innerText = JSON.stringify(snap.val(), null, 3);
  		// 	// 	div.appendChild(p);
  		// 	// 	document.body.appendChild(div);
  				
  		// 	// });
  		// }
