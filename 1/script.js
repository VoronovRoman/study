
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
// class User {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello(){
//         console.log(`hello ${this.name}`)
//     } 
//     exit(){
//         console.log(`user ${this.name} out`)
//     }
// }
// let ivan = new User("Ivan", 1488)
// let alex = new User("Alex", 228)
// console.log(ivan)
// console.log(alex)
// ivan.exit()
// //ES6 END

// // FUNC AND .THIS START

// function showThis (a, b){
//     console.log(this)
//     function sum(){
//         console.log(this)
//         return a+b;       //return this.a+this.b;
//     }
//     console.log(sum())
// }
// showThis(4,5);
// showThis(5,5);
// //1) call func 


// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this)
//         function shout(){
//             console.log(this)
//         }
//         shout();
//     }
// }
// obj.sum();
// 2) Method of obj - this => obj
// 3) Constructor (new) - this => new object


// let user = {
//     name: "John"
// };

// function sayName (surname){
//     console.log(this);
//     console.log(this.name + surname);
    
// };
// sayName();
// console.log(sayName.call(user, "Smith"));
// console.log(sayName.apply(user, ["Snow"]));



// function count(num){
//     return this*num;
// }

// let double = count.bind(2);
// console.log(double(3))
// console.log(double(10))

// 4) Indication of contecst - call, apply, bind


// let btn = document.querySelector("button")

// btn.addEventListener("click", function(){
//     console.log(this)
//     this.style.backgroundColor = "red";
//     function showThis(){
//         console.log(this);
//     }
//     showThis();
// });

// // FUNC AND .THIS END
// //********************************END FUNC CONSTRUCTOR AND CLASSES IN JS



// // //*********************************** INTERPOLATION START
// let name = "Dima",
//     age = 99,
//     mail = "example@gmail.com"

// document.write("User " + name + " " + age + " years old. His email: " + mail)
// document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp")
// document.write(`User ${name} ${age} years old. His email: ${mail}`)
// // //*********************************** INTERPOLATION END

// //*********************************** LET/VAR START
// function makeArr(){
//     var items = []

//     for(let i = 0; i<10; i++){
//         var item = function(){
//             console.log(i);
//         };
//         items.push(item);
//     }
//     return items;
// };
// var arr = makeArr();
// arr[1]();
// arr[3]();
// arr[7]();
// // //*********************************** LET/VAR END

// // //*********************************** ARROW FUNC START
// let fun = ()=>{
//     console.log(this);
// }
//fun();

// let obj = {
//     number: 5,
//     sayNum: function(){
//         let say = ()=>{
//             console.log(this)
//         }
//         say();
//     }
// }
// obj.sayNum();
// // //*********************************** ARROW FUNC END


// // //*********************************** DEFAULT PREFERENCES START

// function calcOrDouble (number, basis = 2){  //...=2     ES6
//     //basis = basis || 2;       ES5

//     console.log(number*basis)
// }
// calcOrDouble(3,5)
// calcOrDouble(6)

// //*********************************** DEFAULT PREFERENCES START


// //***********************************  SOME CLASESS ES6. START

// class Rectangle {
//     constructor(h, w=20){
//         this.height = h;
//         this.width = w;    
//     }
//     calcArea(){
//         return this.height*this.width;
//     }
// }
// const square = new Rectangle(10,10);
// console.log(square.calcArea())

// const square2 = new Rectangle(20);
// console.log(square2.calcArea())
// // //***********************************  SOME CLASESS ES6. END


// // //***********************************  SPREAD OPERATOR. START
// let video = ["youtube", "vimeo", "rutube"],
//     blogs = ["wordpress", "livejournal", "blogger"]
//     internet = [...video, ...blogs, "vk", "facebook"];

//     //spread add "..." before array!!!!!
// console.log(internet);

// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a+b+c)
// }
// let numbers = [2,5,7]

// log(numbers);
// log(...numbers);
// // //***********************************  SPREAD OPERATOR. END


// //**************************************************  hw029. start

// class Options{
//     constructor(h, w, bg, fs=12, ta="left"){
//         this.height = h+"px";
//         this.width = w+"px";
//         this.backgroundColor = bg;
//         this.fontSize = fs+"px";
//         this.textAlign = ta;
//     }
//     createDiv(){
//         let div = document.createElement("div");
//         document.body.appendChild(div);
//         div.style.height = this.height;
//         div.style.width = this.width;
//         div.style.backgroundColor = this.backgroundColor;
//         div.style.fontSize = this.fontSize;
//         div.style.textAlign = this.textAlign;
//         console.log(this);
//     }
    
// };
// let divType1 = new Options(100, 100, "red");
// div1 = divType1.createDiv();

// div2 = divType1.createDiv();

// let divType2 = new Options(200, 200, "gray");
// divType2.createDiv();
/////////******************************************** */

// class Options{
//     constructor(){
//         // this.height = height;
//         // this.width = width;
//         // this.bg = bg;
//         // this.fontSize = fontSize;
//         // this.textAlign = textAlign;
//         console.log(this)
//     }
//     createDiv(text,csss){
//         let div = document.createElement("div");
//         document.body.appendChild(div);
//         div.innerHTML = text
//         div.style.cssText = csss;
//     }
// }

// let div = new Options;
// div.createDiv("some text", "height:100px;width:100px;background-color:\
// pink;font-size:12px;text-align:center;")

// let div2 = new Options;
// div2.createDiv("some text", "height:200px;width:400px;background-color:\
// blue;font-size:42px;text-align:center;")
// //**************************************************  hw029. end

// //********************** some practic for XMLHttpRequest and fetch. START

//const requestURL = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();

// xhr.open("GET", requestURL);
// xhr.responseType = "json"

// xhr.onload = () => {                        //all errors
//     if(xhr.status >= 400){
//         console.error(xhr.response)
//     }else{
//         console.log(xhr.response); 
//     }
// }
// xhr.onerror = ()=> console.log(xhr.response) //network error

// xhr.send();

//POST WITH PROMISES
// function sendRequest (method, url, body=null){
//     return new Promise( (resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = "json";
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.onload = () => {                        //all errors
//             if(xhr.status >= 400){
//                 reject(xhr.response)
//             }else{
//                 resolve(xhr.response); 
//             }
//         }
//         xhr.onerror = ()=> reject(xhr.response) //network error

//         xhr.send(JSON.stringify(body));

//     });
// }

// // sendRequest("GET", requestURL)
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))
// let body = {
//     name: "Viktor",
//     age: 26
// }

// sendRequest("POST", requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// POST WITH PROMISE END.


// // **********************FETCH GET START
// const requestURL = "https://jsonplaceholder.typicode.com/users";
// function sendRequest (method, url, body=null){
//     return fetch(url).then(response =>{
//         return response.json()
//     })
// }
// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// // ******************************FETCH GET END

// **********************FETCH POST START
// const requestURL = "https://jsonplaceholder.typicode.com/users";
// function sendRequest (method, url, body=null){
//     const headers = {
//         "Content-Type":"application/json"
//     };
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers 
//     }).then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{
//             return response.json().then(error => {
//                 const e = new Error("Something goes wrong");
//                 e.data = error;
//                 throw e
//             })
//         }
        
//     })
// }

// let body = {
//     name: "Viktor",
//     age: 26
// }
// sendRequest("POST", requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// ******************************FETCH POST END
// //********************** some practic for XMLHttpRequest and fetch. END

//********************************************PROMISE START

// let btn = document.querySelector("button");
// console.log(btn)
// btn.addEventListener("click", ()=>{
//     alert()
// })

//CALLBACK HEEELLL ABSTRACT
// let func1 = function(param, func2){
//     func2(function(param, func3){
//         func3(function(param, func4){
//             func4(function(param, func5){

//             })
//         })
//     })
// }

//CALLBACK HEEELLL EXAMPLE
let drink = 0;
function shoot(arrow, headshot, fail){
    console.log("You make a shoot..")
    setTimeout(function(){
        Math.random()>.5 ? headshot({}): fail("Miss");
    }, 3000)
}
function win(){
    console.log("You win");
    (drink == 1) ? buyBeer(): giveMoney();
}
function buyBeer(){
    console.log("Here's beer for You")
}
function giveMoney(){
    console.log("Take money, bro")
}

function loose(){
    console.log("You loose")
}

shoot({}, 
        function(mark){
            console.log("HeadSHOT!");
            win(mark, buyBeer, giveMoney)
        },
        function(miss){
            console.error(miss);
            loose()
        }
    );


//********************************************PROMISE END