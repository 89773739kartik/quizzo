const element1 = document.getElementById("one");
const element2 = document.getElementById("two");
const element3 = document.getElementById("three");
const name = document.getElementById("input");
const button1 = document.querySelector('one')
const button2 = document.querySelector('two')
const button3 = document.querySelector('three')
const button4 = document.querySelector('count')


var score = 0;


function myFuncton() {
  var x = document.getElementById("input").value;
  document.getElementById("name").innerHTML = "Hii,  "+x;
}



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Sunday
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];



function myFun() {
  if (day == "Saturday") {
    document.getElementById("loss").click();

  }
}



// WINNER
function win() {
  document.getElementById("two").style.background = '	#008000';
  document.getElementById("two").innerHTML = "Right! Answer" +answer2;
  document.getElementById("two").style.background = '	#008000' + answer2;
  document.getElementById("one").innerHTML = "Wrong! Answer" + answer1;
  document.getElementById("three").innerHTML = "Wrong! Answer" + answer3;
  document.getElementById("four").innerHTML = "Wrong! Answer" + answer4;


  document.getElementById("one").disabled = true;

  document.getElementById("two").disabled = true;

  document.getElementById("three").disabled = true;

  document.getElementById("four").disabled = true;
score=score+20
document.getElementById("scores").innerHTML=score;
const myTimeout = setTimeout(  86400000);
timedText();
}

function timedText() {
  var x = document.getElementById("time");
  setTimeout(() => { x.value = "2 seconds" }, 2000);
  setTimeout(() => { x.value = "4 seconds" }, 4000);
  setTimeout(() => { x.value = "6 seconds" }, 6000);
}

let answer1 = "1";
let answer2 = "2";
let answer3 = "3";
let answer4 = "4";


function loose() {
  document.getElementById("one").style.background = '	#FF0000';

  document.getElementById("three").style.background = '	#FF0000';

  document.getElementById("four").style.background = '	#FF0000';
  document.getElementById("two").style.background = '	#008000';


  document.getElementById("two").style.background = '	#008000' + answer2;
  document.getElementById("one").innerHTML = "Wrong! Answer" + answer1;
  document.getElementById("three").innerHTML = "Wrong! Answer" + answer3;
  document.getElementById("four").innerHTML = "Wrong! Answer" + answer4;
  document.getElementById("two").innerHTML = " This Is rigth answer Right Answer" + answer2;

  document.getElementById("one").disabled = true;

  document.getElementById("two").disabled = true;

  document.getElementById("three").disabled = true;

  document.getElementById("four").disabled = true;
}
const element = document.getElementById("count");

function de() {
  element.remove();
}

var Name = document.getElementById("input");


// function scookie() {
// // document.cookie="name="+document.form.name.value;
// var x = document.getElementById("input").value;
// document.getElementById("name").innerHTML = "Hii,  "+x;

// }























