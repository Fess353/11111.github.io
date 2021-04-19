var point1 = document.querySelector('.point1');
var point2 = document.querySelector('.point2');
var point3 = document.querySelector('.point3');
var point4 = document.querySelector('.point4');


var point2_aim = document.getElementById("point2_aim");
var point3_aim = document.getElementById("point3_aim");
var point4_aim = document.getElementById("point4_aim");

function myFunction1() {
    var point1_aim = document.getElementById("point1_aim");
    point1_aim.scrollIntoView();
  }

  function myFunction2() {
    var point2_aim = document.getElementById("point2_aim");
    point2_aim.scrollIntoView();
  }

  function myFunction3() {
    var point3_aim = document.getElementById("point3_aim");
    point3_aim.scrollIntoView();
  }

  function myFunction4() {
    var point4_aim = document.getElementById("point4_aim");
    point4_aim.scrollIntoView();
  }

  function myFunction5() {
    var point5_aim = document.getElementById("point5_aim");
    point5_aim.scrollIntoView();
  }



var ham = document.querySelector('.ham');
var nav = document.querySelector('.navigation_menu');
ham.onclick = function() {
    nav.classList.toggle('hidden');
    ham.classList.toggle('open');
};
