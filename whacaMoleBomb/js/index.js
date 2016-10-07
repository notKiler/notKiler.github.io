//Make a flag to know when the black circle is shown. 0 = hidden, 1 = shown
//timer is changed by 0.1 seconds every mouse click.
var Pt = 0;
var flag = 0;
var clock = 60;

var timer = 3000;

var audio = new Audio("http://www.javascriptkit.com/script/script2/click.ogg", "http://www.javascriptkit.com/script/script2/click.mp3");

var speed = setInterval(swapperone, timer);

var randomNumber = Math.floor(Math.random() * 9) + 1;



function points(clicked_id) {
  if (flag == 1 && clicked_id == randomNumber) {
  audio.play();
  
}

  if (flag == 0 || clicked_id != randomNumber) {
    audio.play();
    Pt = Pt - 1;
    timer = timer + 75;
    clearInterval(speed);
    speed = setInterval(swapperone, timer);
    document.getElementById("PointsView").innerHTML = "Your Points: " + Pt;
  } else if (flag == 1 && clicked_id == randomNumber) {
    Pt = Pt + 1;
    timer = timer - 75;
    clearInterval(speed);
    speed = setInterval(swapperone, timer);
    document.getElementById("PointsView").innerHTML = "Your Points: " + Pt;
  }

  console.log(timer)
  console.log("Your Points are: " + Pt);
}


//setInerval function allows you to choose one function, one length of time

function swapperone() {

  if (flag == 0) {
    document.getElementById(randomNumber).src = "http://www.clker.com/cliparts/g/o/B/T/y/X/glossy-green-button-hi.png";
    flag = 1;

  } else if (flag == 1) {
    //change pic to circle
    document.getElementById(randomNumber).src = "http://www.downloadclipart.net/large/18089-glossy-red-button-design.png";
    //make flag to 0 so it indicates hidden
    flag = 0;
    //change the random number
    randomNumber = Math.floor(Math.random() * 9) + 1;

  }

}

//Timer
var seconds = 60;

function secondPassed() {
  var minutes = Math.round(seconds),
      remainingSeconds = seconds % 1;
  
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;  
  }
  
  document.getElementById('countdown').innerHTML = minutes;
  if (seconds == 0) {
    location.reload();
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "00:00";
  } else {
    seconds--;
  }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);


//location.reload();