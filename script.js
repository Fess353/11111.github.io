let point2=document.querySelector('.point2');
let point3=document.querySelector('.soft_names');


point2.onclick = function () {
    window.scrollTo(0, 750 );
    behavior: 'smooth';
};

var skill_nav = document.getElementsByClassName('.skill_main');
console.log(skill_nav);

//const el = document.getElementsByClassName('.soft_star1');
//el.scrollIntoView({block: "center", inline: "center"}); // Задаём параметр block для вертикальной прокрутки до центра, inline до горизонтальной