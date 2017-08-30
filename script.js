var  titles= ["Freelance Web Developer", "Robotics Builder", "Graphic Designer", "Entrepreneur"];
var count = 1;

$(document).ready(function () {
    changetitle();
});


function changetitle() {
    setInterval(function () {
        if (count < titles.length) {
            $("#titles").html(titles[count]);
            count++;
        } else {
            $("#titles").html(titles[titles.length]);
            count = 0;
        }
    }, 1100);
}

