var myClock = document.getElementById('first');
var myClock1 = document.getElementById('second');
var displaySetting = myClock.style.display;
var displaySetting1 = myClock1.style.display;
var database = firebase.database().ref();
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
    function updateDB(){
        var name = $("#name").val();
        console.log(name);
  alert("You have been registered! Check the Guest list");
        //Update database here
        var value = {
                NAME: name
            }
            database.push(value);
    }
    database.on("child_added", function(rowData){
    var row = rowData.val();
    var name = row.NAME;
    var fullText = "<li>" + name +"</li>";
    $("#list").append(fullText);
})
