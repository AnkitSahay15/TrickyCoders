var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Time Up!";
  } else {
    document.getElementById("countdown").innerHTML ="TIMELEFT"+" "+"~~ "+ timeleft + " SEC";
  }
  timeleft -= 1;
}, 1000);