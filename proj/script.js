'use strict'
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money== "" || money == null ){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
//start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function(){
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
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: "+ appData.moneyPerDay);
    },
    detectRichLevel: function(){
        if(appData.moneyPerDay<100){
            console.log("Мининмальный уровень достатка");
        }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay>2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }  
    },
    checkSavings: function(){
        if ((appData.saving) == true){
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }        
    },
    chooseOptionalExpenses: function(){
        for (let i=0; i<3; i++){
            appData.optionalExpenses[i+1]=prompt("Input optional Expenses");
        }        
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через зарятую)", "");
        
        while (items == null || items=="" || isNaN(items)==false) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через зарятую)", "");
        }

        appData.income = items.split(", ");
        
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();

        
        this.income.forEach(function(items, i) {
            console.log("Способы доп заработка: " + (i+1) +" "+ items)
        });
        //console.log(appData.income)

    },
};

//appData.chooseExpenses();
//appData.detectDayBudget();
//appData.detectRichLevel();
//appData.checkSavings();
//appData.chooseOptionalExpenses();
//appData.chooseIncome();


for (let key in appData){
    console.log("Наша программа включает в себя данные:"+ key)
}