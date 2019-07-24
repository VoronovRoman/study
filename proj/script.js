'use strict'
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money=="" || money == null ){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
//start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
}

function chooseExpenses(){
    for(let i=0; i<2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?","");
        //Проверяем ввод
        if( (typeof(a))==="string" && typeof(a) != null && (typeof(b)) != null
            && a != "" && b!="" && a.length<50){
            console.log("done"+ i)
            appData.expenses[a] = b;
        }else{
            i = i-1;
        }   
    };
}
//chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("You budget on 1 day "+ appData.moneyPerDay);
}
//detectDayBudget();

function detectRichLevel(){
    if(appData.moneyPerDay<100){
        console.log("minimal level rich");
    }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log("middle level rich");
    }else if(appData.moneyPerDay>2000){
        console.log("high level rich");
    } else {
        console.log("Error");
    }
}
//detectRichLevel();


function chechSavings(){
    if ((appData.saving) == true){
        let save = +prompt("How much money you saving?"),
            persent = +prompt("What procent?");
        
        appData.monthIncome = save/100/12*persent;
        alert("Profit from you depozit is: " + appData.monthIncome);
    }
}
chechSavings();

function chooseOptionalExpenses(){
    for (let i=0; i<3; i++){
        appData.optionalExpenses[i+1]=prompt("Input optional Expenses");
    }
}
chooseOptionalExpenses();