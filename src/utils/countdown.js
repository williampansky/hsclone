/********************************************************************************************************************
Countdown.js is a simple script to add a countdown timer
for your website. Currently it can only do full minutes
and partial minutes aren't supported. This script is a fork of http://jsfiddle.net/HRrYG/ with some 
added extensions. Since the original code that I forked was released under Creative Commons by SA license, 
I have to release this code under the same license. You can view a live demo of this code at http://jsfiddle.net/JmrQE/2/.
********************************************************************************************************************/
export default function countdown(minutes) {
  var seconds = 60;
  var mins = minutes;

  function tick() {
    seconds--;
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        countdown(mins - 1);
      }
    }
  }
  tick();
}

//You can use this script with a call to onclick, onblur or any other attribute you would like to use.
//where n is the number of minutes required.
