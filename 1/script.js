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

// //****************************** DOOOOOM END!


// //****************************** EVENTS DOM START!
//  let btn = document.getElementsByTagName("button");
//     wrap = document.querySelector(".wrapper"),
//     link = document.querySelector("a");

//let btnArr = document.querySelectorAll("button");

// btn[0].onclick = function(){
//     alert("You pressed the first button")
// };
// btn[0].onclick = function(){
//     alert("You again pressed the first button")
// }


// btn[0].onclick = function(){
//     alert("You pressed the first button")
// };

// btn[0].addEventListener("click", function(){
//     alert("You pressed the first button");
// });

// btn[0].addEventListener("click", function(){
//     alert("You again pressed the first button");
// });

// let i = 1;
// btn[0].addEventListener("mouseenter", function(){
//     console.log("You moused at first button " + i++ +" times");
// });



// btn[0].addEventListener("click", function(event){
//     console.log(event)
//     let target = event.target;
//     //console.log("Event happen " +event.type+ " on element " +target);
//     target.style.display = "none";
// });

// btn[0].addEventListener("click", function(event){
//     console.log("Event happen " +event.type+ " on element " +event.target);
// });

// wrap.addEventListener("click", function(){
//     console.log("Event happen " +event.type+ " on element " +event.target);
// })

// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Event happen " +event.type+ " on element " +event.target);
// })

// btnArr.forEach(function(item){
//     item.addEventListener("mouseleave", function(){
//         console.log("sign out!");
//     })
// })

// //****************************** EVENTS DOM END!



// // //******************************** SOME ARRAYS METHODS REPEAT. START
// const peopleArr = [
//     {name: "Ivan", age: 26, budget: 45000},
//     {name: "Roma", age: 17, budget: 5400},
//     {name: "Dima", age: 13, budget: 6200},
//     {name: "Igor", age: 18, budget: 19020},
// ];

// for(let i = 0; i<peopleArr.length; i++){
//     console.log(peopleArr[i])
// }
// console.log("for classic loop end*********************************")


// for(let k of peopleArr){
//     console.log(k)
// }
// console.log("for of end*********************************")


// for(let k in peopleArr){
//     console.log(peopleArr[k])
// }
// console.log("for in end*********************************")


// peopleArr.forEach(function(elem, index, arr){
//     console.log(elem,index,arr);
// })
// console.log("forEach classic(ES5) end*********************************")


// peopleArr.forEach(element =>{
//     console.log(element)
// })
// console.log("for Each ES 6 end*********************************")

// peopleArr.forEach(element => console.log(element))



///////MAP
// const newPeopleArr = peopleArr.map(function(elem){
//     return elem
// });
// console.log(peopleArr)
// console.log(newPeopleArr)

////THE SAME. MAP
// const newPeopleArr = peopleArr.map(elem => {
//     return elem.name
// });
// console.log(newPeopleArr)


// const newPeopleArr = peopleArr.map(elem => {
//     return `Name: ${elem.name} - ${elem.age} years`
// });
// console.log(newPeopleArr)


// const newPeopleArr = peopleArr.map(elem => `Name: ${elem.name} - ${elem.age} years`);
// console.log(newPeopleArr)

// const newPeopleArr = peopleArr.map(elem => elem.age*3);
// console.log(newPeopleArr)


//////////FILTER
// const adults = peopleArr.filter(elem => {
//     if(elem.age >= 18){
//         return true;
//     }
// })
// console.log(adults)

//////////THE SAME. FILTER
// const adults = peopleArr.filter(elem => elem.age >= 18)
// console.log(adults)


//////////REDUCE
// let rez = 0
// for(let i=0; i<peopleArr.length; i++){
//     rez+=peopleArr[i].budget
// }
// console.log(rez)

// let rez = peopleArr.reduce((total, elem) =>{
//     return total + elem.budget 
// }, 0)
// console.log(rez)

// let rez = peopleArr.reduce((total, elem) => total + elem.budget, 0)
// console.log(rez)


// //////////////FIND METHOD
// const roma = peopleArr.find(elem => elem.name === "Roma")
// console.log(roma)


// //////////////FIND INDEX
// const romaInd = peopleArr.findIndex(elem => elem.name === "Roma")
// console.log(romaInd)



///////////SUPER EXAMPLE TASK

// const neeeewPeopleArr =  peopleArr
//     .filter(element=>element.budget>6000)
//     .map(elem=>{
//         return {
//             info: `${elem.name} (${elem.age})`,
//             budget: elem.budget
//         }
//     })
// console.log(neeeewPeopleArr)

// const amount = neeeewPeopleArr
//     .reduce((total, elem) => total + elem.budget, 0)
// console.log(amount)
// //******************************** SOME ARRAYS METHODS REPEAT. END



// //******************************** SET TIMEOUT, SET INTERVAL
// let timerId = setTimeout(sayHI, 3000);
// clearTimeout(timerId);
// function sayHI(){
//     console.log("hi");
// }

// let intervalID = setInterval(sayHI, 3000)
// clearTimeout(intervalID)


// let timerID = setTimeout(function log(){
//     console.log("hello");
//     setTimeout(log, 2000);
// });

//let btn = document.querySelector(".btn"),
//     elem = document.querySelector(".box");

// function myAnim(){
//     let pos = 0;
//     let timerId = setInterval(frame, 10);

//     function frame(){
//         if(pos == 150){
//             clearInterval(timerId);
//         }else{
//             pos++
//             elem.style.top = pos +"px";
//             elem.style.left = pos +"px";
//         }
//     }
// };
// btn.addEventListener("click", myAnim);

// let btnBlock = document.querySelector(".btn-block"),
//     btns = document.getElementsByTagName("button")

// // btnBlock.addEventListener("click", function(event){
// //     if(event.target && event.target.tagName == "BUTTON"){
// //         console.log("message");
// //     }
// // })

// // btnBlock.addEventListener("click", function(event){
// //     if(event.target && event.target.classList.contains("first")){
// //         console.log("message");
// //     }
// // })

// btnBlock.addEventListener("click", function(event){
//     if(event.target && event.target.matches("button.first")){
//         console.log("message");
//     }
// });
// //******************************** END ET TIMEOUT, SET INTERVAL



// //********************************START PARAM WINDOW JS
// let box = document.querySelector(".box")

// let width = box.clientWidth,
//     height = box.clientHeight;

// console.log(width)
// console.log(height)

// let width2 = box.offsetWidth,
//     height2 = box.offsetHeight;

// console.log(width2)
// console.log(height2)

// let width3 = box.scrollWidth,
//     height3 = box.scrollHeight;

// console.log(width3)
// console.log(height3)

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     //box.style.height = box.scrollHeight+"px";
//     box.scrollTop=0;
// }) 

// console.log(box.getBoundingClientRect().left);

// console.log(document.documentElement.clientWidth)
// console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.scrollTop)


// scrollBy(0, 200);   //scrollBy(x,y) each time scroll on 200px 
// scrollto(0, 200);   //scrollTo(x,y) scroll to 0,200px coordinat

// //********************************END PARAM WINDOW JS


// //********************************START FUNC CONSTRUCTOR AND CLASSES IN JS

// //ES5 START
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log("hello " + this.name)
//     }
// }
// User.prototype.exit = function(name){
//     console.log("user " + this.name+ " out")
// }

// let ivan = new User("Ivan", 1488)
// let alex = new User("Alex", 228)
// console.log(ivan)
// console.log(alex)
// ivan.exit() 
// //ES5 END

// //ES6 START
class User {
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){
        console.log(`hello ${this.name}`)
    }
    exit(){
        console.log(`user ${this.name} out`)
    }
}
let ivan = new User("Ivan", 1488)
let alex = new User("Alex", 228)
console.log(ivan)
console.log(alex)
ivan.exit()

// //ES6 END
// //********************************END FUNC CONSTRUCTOR AND CLASSES IN JS
