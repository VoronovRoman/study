'use strict'

//get button "Начать расчет" start
let start = document.querySelector("#start");
console.log(start)
//get button "Начать расчет" end    


// get all blocks with any name start
function getAllElemWithClassName(youClassName){
    let mass = []
    document.querySelectorAll("*").forEach(element => {
        if (element.className.includes(youClassName)){
            mass.push(element);
            };
        });
    return mass;
}
console.log(getAllElemWithClassName("value"))
// get all blocks with name end


// get all elements input with class start
let allInputs = document.getElementsByClassName("expenses-item")
console.log(allInputs);
console.log(allInputs[1]);
// get all elements input with class end

// get buttons with tagName start
let conf1 = document.getElementsByTagName("button")[0],
    conf2 = document.getElementsByTagName("button")[1],
    calcul = document.getElementsByTagName("button")[2]
console.log(conf1, conf2, calcul);
// get buttons with tagName END


let optExpensInputs = document.querySelectorAll(".optionalexpenses-item");
console.log(optExpensInputs)


let anotherBlocks = document.querySelectorAll(".choose-income, #savings, n\
#sum, #percent, .year-value, .month-value, .day-value")
console.log(anotherBlocks)

