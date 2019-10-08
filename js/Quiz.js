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
 firebase.auth().onAuthStateChanged(function(user,displayName) {
  if (user) {


    var user = firebase.auth().currentUser;
    console.log(user.displayName);
    name = user.displayName;

   

    if(user != null){

    }
}
});

var button = document.getElementById('end');

button.style.display = "none"      
let name = " ";
let com = 0;
    
const showq = document.getElementById('endtext');    
const question = document.getElementById("question");
const  Choices = Array.from(document.getElementsByClassName('ql'));
console.log(Choices);
let Currentquestion = {};
let Allow = false;
let score = 0;
let questioncount = 0;
let totalcorrect = 0;
let questions = [
  {
    questiona: "When you enter the shop what must you wear",
    choice1: "night vision goggles",
    choice2: "welding mask",
    choice3: "Saftey goggles",
    choice4: "Nothing",
    answer: 3
  },
  {
    questiona:
      "What should you do if a battery spills",
    choice1: "Clean it up with a paper towel",
    choice2: "splash in it",
    choice3: "Use battery spill kit and pick it up",
    choice4: "Use battery spill kit and pick it up with gloves",
    answer: 4
  },
  {
    questiona: "Fire!",
    choice1: "use fire exinguisher",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 1
  }
];
let Avalibleq
const correctscore = 1;
const maxques = 3
const Startgame = ()=>{
let questioncount = 0;
let score = 0;
Avalibleq = [...questions];	
console.log(Avalibleq);
getq();
}

getq = (user,displayName) => {
	if(Avalibleq.length == 0 || questioncount >= maxques){
		var title = document.getElementById('title').innerText;
		var finddata = firebase.database().ref().child("Assignments");
		var test = finddata.child(title);
		var seda = firebase.database().ref().child("Users");
		var finduser = seda.child(name);
		var complete =  finduser.child("complete");
		var scored = totalcorrect/maxques;
		var showscore = document.getElementById('scoreshow');
		
		var ans = Math.round(scored*100);
		if(ans == 100){
		showscore.innerText = "Great job you scored " + ans + "%";
	}
	else{
		showscore.innerText = "Try harder next time your score was " + ans + "%";
	}
		complete.on("value", snap =>{
			com = snap.val();
			
		});
		complete.set(com + 10);
		
		var w = test.child(name);
		test.child(name).set(ans);
		
		var doc = document.getElementById('holdi');
		doc.style.display = "none";
		question.style.display = "none";
		showq.innerText = "Click button to end"

		button.style.display = "block"
		
		return;
	}
questioncount++;

if(questioncount <= maxques){
showq.innerText = "QUESTION " + questioncount +  " OF " + maxques
}
const questionin = Math.floor(Math.random()*Avalibleq.length);
Currentquestion = Avalibleq[questionin];
question.innerText = Currentquestion.questiona;
Choices.forEach( choice => {
const number = choice.dataset['number'];
choice.innerText = Currentquestion["choice"+number];
});
Avalibleq.splice(questionin, 1);
Allow = true;
};
Choices.forEach(choice =>{
choice.addEventListener("click", e =>{
console.log(e.target);
if(!Allow){
	return;}

	Allow = false;
	const schoice = e.target;
	const selectedAnswer = schoice.dataset["number"];
	console.log(selectedAnswer == Currentquestion.answer, selectedAnswer,Currentquestion.answer);

	if (selectedAnswer == Currentquestion.answer) {
		totalcorrect=totalcorrect+1
	}
	getq();

});
});
Startgame();
function bob(){
	window.location.assign("Assignment.html");

}