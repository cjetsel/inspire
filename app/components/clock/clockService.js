export default class ClockService {
  beginClock() {
    function displayTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var meridiem = "AM";
      var welcomeStatement = "Good morning"
      if (seconds < 10) {
        seconds = "0" + seconds;
      };
      if (minutes < 10) {
        minutes = "0" + minutes;
      };

      if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
        welcomeStatement = "Good afternoon"
      };
      if (hours > 17) {
        welcomeStatement = "Good evening"
      }
      if (hours === 0) {
        hours = 12;
      };
      if (hours < 10) {
        hours = "0" + hours;
      };
      var clockDiv = document.getElementById('clock');
      var welcomeDiv = document.getElementById('welcome');
      clockDiv.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
      welcomeDiv.innerText = `${welcomeStatement}`;
    };
    displayTime();
    setInterval(displayTime, 1000);
  }
}