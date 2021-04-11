let point1 = document.querySelector('.point1');
let point2 = document.querySelector('.point2');
let point3 = document.querySelector('.point3');
let point4 = document.querySelector('.point4');

var ham = document.querySelector('.ham');
var nav = document.querySelector('.navigation_menu');

point1.onclick = function () {
    window.scrollTo(0, 150 );
    behavior: 'smooth';
};

point2.onclick = function () {
    window.scrollTo(0, 650 );
    behavior: 'smooth';
};

point3.onclick = function () {
    window.scrollTo(0, 1150 );
    behavior: 'smooth';
};

point4.onclick = function () {
    window.scrollTo(0, 1600 );
    behavior: 'smooth';
};

ham.onclick = function() {
    nav.classList.toggle('hidden');
};



//const el = document.getElementsByClassName('.soft_star1');
//el.scrollIntoView({block: "center", inline: "center"}); // Задаём параметр block для вертикальной прокрутки до центра, inline до горизонтальной