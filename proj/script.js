'use strict'

let money = prompt("You budget on the month?");
let time = prompt("Input date in format YYYY-MM-DD");

let first = prompt("Enter mandatory expenses item in this month");
let second = prompt("How much it will cost?")
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        first: second
    },
    optionalExpenses: {

    },
    income: [],
    saving: false
}

alert("You budget on 1 day "+ money/30)