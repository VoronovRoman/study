'use strict'

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let first = prompt("Enter mandatory expenses item in this month");
let second = prompt("How much it will cost?")
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}
let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert("You budget on 1 day "+ appData.budget/30);