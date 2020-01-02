'use strict'

let start = document.querySelector("#start"),

    
   
classesWithDash = new Set();
document.querySelectorAll('*').forEach(element => { 
  for (const cls of element.className.split(' ').filter(name => name.includes("value"))) {
      classesWithDash.add(cls);
  }
});

console.log(classesWithDash)




//*********************************************
// let x = document.querySelectorAll(".result")[0].children
// console.log(x)
//*********************************************




console.log("*********************************************");





let emptyArr = [];

document.querySelectorAll("*").forEach(element => {
    if (element.className.includes("value")){
        emptyArr.push(element);
    };
});
console.log(emptyArr)
console.log(emptyArr[0])






//*********************************************
// var classesContain = [];

// document.querySelectorAll('*').forEach(x => {
//   var y = (x.className || '').split(/\s+/g); // use a regex to cater for multiple spaces
//   y.forEach(className => {
//     if (className.includes("value"))
//       classesContain.push(className);
//   });
// });

// console.log('Final class list: ', classesContain);
//*********************************************




//*********************************************
// let arr = ["abcd-value", "dba-value", "advert"]

// function findValue (s){
//     let mass = [];

//     for (let i =0; i<s.length; i++){
//         if(s[i].indexOf("value") != -1){
//             mass[i]=s[i];
//         } else {
//             continue;
//         }
//         return mass;
//     };
// };

// console.log(findValue(arr));
//*********************************************

