'use strict'

let startBtn = document.querySelector("#start"),
    valueArr = getAllElemWithClassName("value"),

    expensesItems = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent");

let money, time;


//func which make array whith all html tags depend from name
function getAllElemWithClassName(youClassName){
    let mass = [];
    document.querySelectorAll("*").forEach(element => {
        if (element.className.includes(youClassName)){
            mass.push(element);
            };
        });
    return mass;
};

//non active btns before press start
for(let i = 0; i<document.getElementsByTagName("button").length-1; i++){
    if(document.getElementsByTagName("button")[i].disabled==true){
        document.getElementsByTagName("button")[i].style.backgroundImage='linear-gradient(#a3a3a3, #b8b4b8)'
    };
};


//start func
startBtn.addEventListener("click", function(){

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money== "" || money == null ){
        money = +prompt("Ваш бюджет на месяц?", "");
    };
    appData.budget = money;
    appData.timeData = time;
    valueArr[0].textContent = money.toFixed();
    valueArr[8].value = new Date(Date.parse(time)).getFullYear();
    valueArr[9].value = new Date(Date.parse(time)).getMonth() + 1;
    valueArr[10].value = new Date(Date.parse(time)).getDate();

    //make active btns
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    for(let i = 0; i<document.getElementsByTagName("button").length-1; i++){
        if(document.getElementsByTagName("button")[i].disabled==false){
            document.getElementsByTagName("button")[i].style.backgroundImage='linear-gradient(336deg, #ffbd75, #ff964b)'
        };
    };
});


expensesBtn.addEventListener("click", function(){
    let sum = 0;

    for(let i=0; i<expensesItems.length; i++){
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        //check input
        if( (typeof(a))==="string" && typeof(a) != null && (typeof(b)) != null
            && a != "" && b!="" && a.length<50){
            //console.log("done"+ i)
            appData.expenses[a] = b;
            sum += +b            
        }else{
            i = i-1;
        }   
    }
    valueArr[3].textContent = sum
});


optionalExpensesBtn.addEventListener("click", function(){
    for (let i=0; i<optionalExpensesItems.length; i++){
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i]=opt;
        valueArr[4].textContent += appData.optionalExpenses[i] + " "; 
    };
});

countBtn.addEventListener("click", function(){
    if(appData.budget != undefined){
        if(valueArr[3].textContent != ""){
            appData.moneyPerDay = ((appData.budget-(+valueArr[3].textContent))/30).toFixed();
            valueArr[1].textContent = appData.moneyPerDay;
        }else{
            appData.moneyPerDay = (appData.budget/30).toFixed();
            valueArr[1].textContent = appData.moneyPerDay; 
        };
        if(appData.moneyPerDay<100){
            valueArr[2].textContent = "Мининмальный уровень достатка";
        }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            valueArr[2].textContent = "Средний уровень достатка";
        }else if(appData.moneyPerDay>2000){
            valueArr[2].textContent = "Высокий уровень достатка";
        } else {
            valueArr[2].textContent = "Произошла ошибка";
        }
    } else{
        valueArr[1].textContent = "Произошла ошибка";
    }
});


incomeItem.addEventListener("input", function(){
    let items = incomeItem.value;
    appData.income = items.split(", ");
    valueArr[5].textContent = appData.income;
});

checkSavings.addEventListener("click", function(){
    if(appData.saving == true){
        appData.saving = false;
    } else{
        appData.saving = true;
    }
});


sumValue.addEventListener("input", function(){
    if(appData.saving == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        valueArr[6].textContent = appData.monthIncome.toFixed(1);
        valueArr[7].textContent = appData.yearIncome.toFixed(1);
    };
});

percentValue.addEventListener("input", function(){
    if(appData.saving == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        valueArr[6].textContent = appData.monthIncome.toFixed(1);
        valueArr[7].textContent = appData.yearIncome.toFixed(1);
    };
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false
};
