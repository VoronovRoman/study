'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
}

for(let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","");
    //Проверяем ввод
    if( (typeof(a))==="string" && typeof(a) != null && (typeof(b)) != null
        && a != "" && b!="" && a.length<50){
        console.log("done"+ i)
        appData.expenses[a] = b;
    }else{

    }
   
};

appData.moneyPerDay = appData.budget/30;

alert("You budget on 1 day "+ appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("minimal level rich");
}else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("middle level rich");
}else if(appData.moneyPerDay>2000){
    console.log("high level rich");
}