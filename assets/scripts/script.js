//let timeMax = 2;
let days = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;
//let count = (days * 24 * 60 * 60) + ((hours * 60) * 60) + (minutes * 60) + seconds;
let daysHtml = document.querySelector(".days");
let hoursHtml = document.querySelector(".hours");
let minutesHtml = document.querySelector(".minutes");
let secondsHtml = document.querySelector(".seconds");
// btn and form
let form = document.querySelector(".cPrimaryForm");
let buttonRealease = document.querySelector(".cBtn-release");

function show() {
  form.removeAttribute("hidden");
  buttonRealease.setAttribute("hidden", "true");
}
buttonRealease.addEventListener("click", show);

setInterval(()=>{
  decreaseTime();
}, 1000);

function decreaseTime() {
  display();
  seconds--;
  if(days == 0 && hours == 0 && minutes == 0 && seconds ==0){
    return;
  }
  if(hours < 0){
    hours = 23;
    days--;
  }
  /* if(days < 10) {
    days = '0' + days;
  } */
  if(minutes < 0){
    minutes = 59;
    hours--;
  }
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  daysHtml.textContent = days;
  hoursHtml.textContent = hours;
  minutesHtml.textContent = minutes;
  secondsHtml.textContent = seconds;
}

function display(){
  console.log(days + ':' + hours + ':' + minutes + ':' + seconds);
}

/* display();
function decreaseTime() {
  seconds--;
  if(minutes==0 && seconds==0){
    return;
  }
  if (seconds == 0 && minutes >= 0 ) {
    seconds = timeMax;
    minutes--;
  }
  if (minutes == 0 && hours == 0) {
    minutes = timeMax;
  }

  display();
} */





function decrTime(){
  console.log(secondsToDhms(count));
  count--;
}
function secondsToDhms(tSeconds) {
    tSeconds = Number(tSeconds);
    var d = Math.floor(tSeconds / (3600*24));
    var h = Math.floor(tSeconds % (3600*24) / 3600);
    var m = Math.floor(tSeconds % 3600 / 60);
    var s = Math.floor(tSeconds % 60);
  
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }
