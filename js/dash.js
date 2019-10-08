var tom = 0;
displayNamex = ""
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



let rad  = true;
// Get a database instance for app2;

  firebase.auth().onAuthStateChanged(function(user,displayName,photoURL) {
  if (user) {


    var user = firebase.auth().currentUser;
    

   

    if(user != null){
      
      var defusername = user.email.replace("@gmail.com"," ");
       if(user.displayName == null){
        var finddata = firebase.database().ref("Users").child(defusername);
      }
      else{
        var finddata = firebase.database().ref("Users").child(user.displayName);
      }
       
      var data = finddata.child("name");
      var percent = finddata.child("complete");
       

      data.on('value', snap=>{
      	if(user.displayName == null){
      		document.getElementById("title").innerHTML = defusername + "'s Dashboard";
      		document.getElementById("namee").innerHTML = defusername;

      	}
      	else{
          
      		document.getElementById("title").innerHTML = user.displayName + "'s Dashboard";
          document.getElementById("namee").innerHTML = user.displayName;
      	}
       displayNamex = user.displayName;
        console.log("hello" + user.photoURL);
        var icon = document.getElementById('icon');
        if(user.photoURL == null  || user.photoURL == " "){
        console.log("no image");
        console.log(user.photoURL);
         icon.src = "img/logo.png" 
        }
        else{
          console.log(user.photoURL);
         console.log("image uploaded");
          document.getElementById('icon').src= firebase.auth().currentUser.photoURL
          console.log(icon.src);
        }
        if (window.location.href.indexOf("Settings") != -1){
          if(user.photoURL == null  || user.photoURL == " "){
        console.log("no image");
         document.getElementById('display').src = "img/logo.png" 
        }
        else{
        document.getElementById('display').src= firebase.auth().currentUser.photoURL
      }
      }
      });
        document.getElementById("Emailhol").innerText = user.email;

      if (window.location.href.indexOf("Dashboard") != -1){
       
          var total = 0;
        var your = 0;
        var nes;
        var f;
         var finddat = firebase.database().ref().child("Assignments");
  finddat.on("value", snapw => {
  snapw.forEach(function(child)  {
    
    console.log(child.key+': '+child.val());
total = total + 1;
var key = child.key;
  
    if(JSON.stringify(child.val()).includes(user.displayName)){
      
     // console.log(data.key);
      var hun = 0;
    var data = firebase.database().ref().child("Assignments");
    var reals = data.child(child.key);
    var real = reals.child(user.displayName);
    real.on("value", snap=>{
      hun = snap.val();
      if(hun == 100){
         your = your + 1;
      }
      else{if(hun < 100){
        nes = child.key;
        f = hun;
        console.log("Key");
      }
    }
    });

   
    
  }
  else{
    nes = child.key;
    f = 0;
console.log("you didint finish");
  }



        });

    if(rad == true){
        var card = document.getElementById('card');
      var comt = document.getElementById('comt');
      var Nexta = document.getElementById('Nexta');
      var Nex = document.getElementById('Nex');
      var Welcome = document.getElementById('Welcome');
      Welcome.innerText = "Welcome "+ user.displayName;
      if(your == total){
        card.innerText = "Congratulations you've Completed All the Assignments";
        Nexta.innerText = "No More Assignments To Complete";
      }
      else{
    
      card.innerText = your + "/" + total + "  Assignments Completed";
      comt.innerText = "Continue To Complete Saftey Training";

      Nexta.innerText = "Next Assignment: " + nes;
      Nex.innerText = f + "% Complete"
    }
   var progress =  your/total;

 var scoress = Math.round((progress*100));
 rad = false;
 score(scoress);
}
  function score(scoress){
   percent.on("value", snap=>{
  
console.log(scoress, your, total);

 percent.set(scoress);

return;

 });
 }
 
});
setTimeout(holon, 2000);
function holon(){
  percent.on('value', snap=>{


setTimeout(chars, 1000);
function chars(){

  var cool = snap.val();
  var options = {
  chart: {
      height: 350,
      type: 'radialBar',
  },
  labels: ['Complete'],
  series: [cool],
  

}
setTimeout(renders(options), 1000);

}
function renders(options){

var chart = new ApexCharts(document.getElementById("chart"), options);

chart.render();
}

});

}
}


      

    
    }

  } else {
    
	window.location = "index.html";


    

  }
});
  function logout(){

  firebase.auth().signOut();
  window.location = "index.html"

}
function PromtReset(user){
  var user = firebase.auth().currentUser;
	if (confirm('Are you sure this cannot be undone')) {
    var defusername = user.email.replace("@gmail.com"," ");
    var finddata = firebase.database().ref("Users").child(defusername);  
    uid = user.uid; 
    finddata.remove();
    var user = firebase.auth().currentUser;

user.delete(uid).then(function() {
  // User deleted.
  logout();
}).catch(function(error) {
  // An error happened.
  alert("uhoh big boy error WTF did u do -from Saahib");
});

    
} else {
    // Do nothing!
}

}
function rename(user,displayName){
  
  var user = firebase.auth().currentUser;
  var Newname = document.getElementById("newname").value;
  user.updateProfile({
      displayName: Newname
      
    }).then(function(user) {
   
  }).catch(function(error) {
  
  console.log("OOOF")
})
 
  }
  function updateimage(user,photoURL){
    var phototype = document.getElementById('typer').value;
    var user = firebase.auth().currentUser;
    user.updateProfile({
 
  photoURL: phototype
}).then(function() {
 
}).catch(function(error) {
  // An error happened.
  console.log("uhoh");
});
   // console.log("Ok");
   //  var icon = document.getElementById('icon');
   //  icon.src = user.photoURL.src;
   console.log("image is updated");
document.getElementById('display').src = phototype;
document.getElementById('icon').src = phototype;
tom = 0;

  }
  function updateimagefile(user,photoURL){
    var user = firebase.auth().currentUser;

var url = ""
  const file = document.querySelector('#updat').files[0];
  console.log(file.name);
   const ref = firebase.storage().ref();
  ref.child(user.uid).put(file);
ref.child(user.uid).getDownloadURL().then(function(ur) {
  url = ur; 
document.getElementById('display').src = url;
document.getElementById('icon').src = url;
 user.updateProfile({
 
  photoURL: url  
}).then(function() {
 
}).catch(function(error) {
  // An error happened.
  console.log("uhoh");
});
tom = 1;
});
  
 


  }
 

  // body...

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var tr = true;
var num = 0
if (window.location.href.indexOf("Assignment") != -1){
window.onload = setTimeout(checkassignment, 2500);
 function checkassignment(user,displayName){
  var usd = document.getElementById('usd');
  var user = firebase.auth().currentUser;
  if(user.displayName == null){
    console.log("Error reload");
    Alert("Cannot read property 'displayName' of null")
  }
  usd.innerText = displayNamex + "'s Assignments";
  console.log("ds");
  var dds = document.getElementById("oofedd");

  

  var user = firebase.auth().currentUser.displayName;
  if(tr == true){
  var finddata = firebase.database().ref().child("Assignments");
  finddata.on("value", snap => {
  snap.forEach(function(child)  {
    console.log(child.key+': '+child.val());

    var li = document.createElement('li');
    li.setAttribute("id", child.key+"li");
    var p = document.createElement('p');
    var hun = 0;
    var data = firebase.database().ref().child("Assignments");
    var reals = data.child(child.key);
    var real = reals.child(user);
    real.on("value", snap=>{
      hun = snap.val();
    });

    if(JSON.stringify(child.val()).includes(user) && hun == 100 ){
    li.innerText = child.key;
    
    li.appendChild(p);
    console.log("Completed");
    
    real.on("value", snap=>{
      p.innerText = "Complete: "+ snap.val() + "%";
      li.appendChild(p);


      console.log(snap.val());
    });
  }
 else{
   if(JSON.stringify(child.val()).includes(user) && hun >= 0){

      var button = document.createElement('button');
    button.setAttribute("id", child.key);
    li.innerText = child.key;
    if(hun == 0){
    button.innerText =  "Restart";
    }
    else{
    button.innerText = "Try again: " + hun + "%";
  }
    li.appendChild(button);
    console.log("Creating Assignments");
  }
  else{
    var button = document.createElement('button');
    button.setAttribute("id", child.key);
    li.innerText = child.key ;
    button.innerText = "Start";
    li.appendChild(button);
    console.log("Creating Assignments");
   /* li.innerText = child.val().email + " --- " + JSON.stringify(child.val());*/
  }
 }
  
  var ul = document.getElementById("ahold");
  ul.appendChild(li);
  tr = false;
  
  
  });

});
}
else{

var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
        var cli = document.getElementById(this.id);
        var finddata = firebase.database().ref().child("Assignments");
  finddata.equalTo(this.id)
console.log(this.id);
window.location = this.id+".html"
  

    };
}


  }
}
}

// Start listing users from the beginning, 1000 at a time.

 

 
  


