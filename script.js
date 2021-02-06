var mintues = 25;
var seconds = "00";

const startButton = document.getElementById("start");

document.getElementById("mintues").innerHTML = mintues;
document.getElementById("seconds").innerHTML = seconds;

startButton.onclick = function () {
  mintues = 24;
  seconds = 59;

  document.getElementById("mintues").innerHTML = mintues;
  document.getElementById("seconds").innerHTML = seconds;

  var mintues_tikTok = setInterval(mintuesClock, 60000);
  var seconds_tikTok = setInterval(secondsClock, 1000);

  function mintuesClock() {
    mintues--;
    document.getElementById("mintues").innerHTML = mintues;
  };
  function secondsClock() {
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds < 10){
      document.getElementById("seconds").innerHTML = "0" + seconds;

    }

    if (mintues <= 0) {
      if (seconds <= 0) {
        clearInterval(mintues_tikTok);
        clearInterval(seconds_tikTok);
      
      document.getElementById("heading"),innerHTML="Well done!";


      };
    };
    if (seconds === 0) {
      seconds = 60;
    }

  };
};