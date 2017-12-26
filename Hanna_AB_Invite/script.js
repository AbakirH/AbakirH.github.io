var myClock = document.getElementById('first');
var myClock1 = document.getElementById('second');
var displaySetting = myClock.style.display;
var displaySetting1 = myClock1.style.display;
window.onload=func1;
function func1(){
  myClock1.style.display = 'none';
}
function toggleClock() {
      myClock1.style.display = 'none';
      myClock.style.display ='block';
  }
  function toggleClock1() {
        myClock.style.display = 'none';
        myClock1.style.display ='block';
    }
    function makeModel() {
    alert("You have been registered!");
    }
