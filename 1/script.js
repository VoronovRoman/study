"use strict"

// var a = "Hello World";

// var b = 1234;

// alert(a);

//*********CALLBACK FUNC****

// function first(){
//     //do something
//     setTimeout( function(){
//         console.log(1);
//     }, 500);
// }
// function second(){
//     console.log(2)
// }

// first();
// second();

// function learnJS(lang, callback){
//     console.log("im study "+lang);
//     callback(); 
// }

// learnJS("javascript", function(){
//    console.log("i'm ended a 3td lesson")
// })


// function some_function(arg1, arg2, callback) {
//     // переменная, генерирующая случайное число в интервале между arg1 и arg2
//     var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
//     console.log(my_number);
//     // теперь всё готово и  мы вызываем callback, куда передаём наш результат
//     callback(my_number);
// }
// // вызываем функцию
// some_function(5, 15, function (num) {
//     // эта анонимная функция выполнится после вызова callback-функции
//     console.log("callback called! " + num);
// });

// function some_function2(url, callback) {
//     var httpRequest; // создаём наш XMLHttpRequest-объект
//     if (window.XMLHttpRequest) {
//         httpRequest = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         // для дурацкого Internet Explorer'а
//         httpRequest = new
//         ActiveXObject("Microsoft.XMLHTTP");
//     }
//     httpRequest.onreadystatechange = function () {
//         // встраиваем функцию проверки статуса нашего запроса
//         // это вызывается при каждом изменении статуса
//         if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//             callback.call(httpRequest.responseXML); // вызываем колбек
//         }
//     };
//     httpRequest.open('GET', url);
//     httpRequest.send();
// }
// // вызываем функцию
// some_function2("text.xml", function () {
//     console.log(this);
// });
// console.log("это выполнится до вышеуказанного колбека");

// //****************/Start object training
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };
// console.log(options.name);

// //training add to object
// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red",
// }
// //delete training from obj 
// delete options.bool;

// console.log(options);

// //training loop in obj
// for (let  key in options) {
//     console.log("Свойство " +key+ " имеет значение " + options[key]);
// }
// //узнаем количество свойст в обьекте
// console.log(Object.keys(options).length);
// //*******************************

// ******************** ARRAY TRAINING
// let arr = [1,2,3,4,5];

// arr.pop();             //delete from end arr
// arr.push("nine")       //add to end of arr

// arr.shift()
// arr.unshift("five")

// // for (let i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // };

// arr.forEach(function(item, i, mass){
//     console.log(i+": "+ item+" (массив: " +mass+ ")")
// });

// console.log(arr)

// let aarr = [1,2,3,4,7];
// for(let key in aarr){
//     console.log(key);
// };
// for(let key of aarr){
//     console.log(key);
// };


// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(",");
//  console.log(arr);


// let arr = ["awdada", "awdad", "zzzz"],
//     i = arr.join(", ");
// console.log(i);


// let arr = ["awdada", "xxwdad", "bs zzz"],
//     i = arr.sort();
// console.log(arr);


// let arr = [1,15,6],
//     i = arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b){
//     return a-b;
// }
// //****************************************************

// //*****************************OOP TRAINING
// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor );
// //*************************************

// //**************************TEST
// function hello(){
//     console.log("hello world!");
// }
// hello();

// function hi(){
//     console.log("hi world!");
// }
// hi();

// let arr = [1, 15, 4, 30, 42],
//     i=arr.sort(compareNum);

// function compareNum(a, b){
//     return a-b;
// }
// console.log(arr);

// //****************************** DOOOOOM!
// let box = document.getElementById("box"),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll(".heart"),   //".wrapper .heart"
//     oneHeart = document.querySelector(".heart"),
//     wrapper = document.querySelector(".wrapper");

// // console.log(box)
// // console.log(btn)
// // console.log(btn[1])
// // console.log(circle[2])
// // console.log(heart)
// // console.log(oneHeart)

// box.style.backgroundColor = "#000";
// btn[1].style.borderRadius = "100%";
// circle[0].style.backgroundColor = "red";
// circle[1].style.backgroundColor = "yellow";
// circle[2].style.backgroundColor = "green";

// // for (let i = 0; i<heart.length; i++){
// //     heart[i].style.backgroundColor = "blue"
// // };

// // heart.forEach(function(item, i, heartsArr){
// //     item.style.backgroundColor = "brown";
// // });

// let div = document.createElement("div"),
//     text = document.createTextNode("Это просто текст"); 

// div.classList.add("black");
// // document.body.appendChild(div)
// // wrapper.appendChild(div);
// // div.innerHTML = "<h1>hello World!</h1>";
// div.textContent = "hello world";

// document.body.insertBefore(div, circle[0]); 
// document.body.removeChild(circle[1]); 
// wrapper.removeChild(heart[1]);

//document.body.replaceChild(btn[1], circle[1]);

// div.style.width = ("100px");
// div.style.height = ("100px");
// div.style.backgroundColor = ("red");

// console.log(div)
// console.log(text)