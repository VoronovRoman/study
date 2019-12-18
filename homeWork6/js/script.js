'use strict'

let li = document.getElementsByClassName("menu-item");
//let menu = document.getElementsByClassName("menu");
let menu = document.querySelector(".menu");

console.log(li)
console.log(li[2])
console.log(menu)
console.log(menu[0])
console.log(document.body)

// // start replacement paragrapgs
let removedLi3 = menu.removeChild(li[1])
let removedLi4 = menu.removeChild(li[2])

menu.append(removedLi3);
menu.append(removedLi4);
// // end of replacement paragrapgs

// // start add a five paragraph
var tempLi = document.createElement('li');
tempLi.className = "menu-item";
tempLi.innerHTML = "Пятый пункт";
menu.insertAdjacentElement("beforeend", tempLi);
// // end add five paragraph

// // start replace background image
document.body.style.background = "url('./img/apple_true.jpg') no-repeat";
document.body.style.backgroundSize = "cover"
// // end replace background image

// // start title changes
let title = document.querySelector("#title");
title.innerHTML = "Мы продаем только подлинную технику Apple"
// // end title changing

// // start remove adv block
document.querySelector(".adv").remove();
// // end

// // you opinion about apple. start
//let opinion = prompt("Что Вы думаете по поводу техники Apple?");
//document.querySelector("#prompt").innerHTML = opinion;
// // end

function opinion (){
    let answ = prompt("Что Вы думаете по поводу техники Apple?");
    document.querySelector("#prompt").innerHTML = answ;
};
//opinion();

console.log(document.querySelectorAll("nav"));
console.log(document.querySelector("nav"))