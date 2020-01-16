window.addEventListener("DOMContentLoaded", function () {
    "use strict";


    // // EXAMLE WITH TABS
    // let tab = document.querySelectorAll(".info-header-tab"),
    //     info = document.querySelector(".info-header"),
    //     tabContent = document.querySelectorAll(".info-tabcontent");

    // function hideTabContent(a){
    //     for(let i = a; i<tabContent.length; i++){
    //         tabContent[i].classList.remove("show");
    //         tabContent[i].classList.add("hide");
    //     };
    // }; 
    // hideTabContent(1);

    // function showTabContent(b){
    //     if(tabContent[b].classList.contains("hide")){
    //         tabContent[b].classList.remove("hide");
    //         tabContent[b].classList.add("show");
    //     };
    // };

    // info.addEventListener("click", function(event){
    //     let target = event.target;
    //     if (target && target.classList.contains("info-header-tab")){
    //         for(let i = 0; i<tab.length; i++){
    //             if(target==tab[i]){
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;
    //             };
    //         };
    //     };
    // });


    // // MY TABS. START
    let parentTabName = document.querySelector(".info-header"),
        tabName = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        };
    };
    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        };
    };

    parentTabName.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tabContent.length; i++) {
                if (event.target == tabName[i]) {
                    hideTabContent(0)
                    showTabContent(i)
                    break;
                }
            }
        }
    })
    // // MY TABS. END

    // // BUTTONS "MORE" IN TABS AND AFTER TIMER. START  
    let overlay = document.querySelector(".overlay"),
        popupClose = document.querySelector(".popup-close"),

        more = document.querySelector(".more"),
        btnsMore = document.querySelectorAll(".description .description-btn");

    function showModal (){
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";   
    };
        
    function closeModal (){
        overlay.style.display = "none";
        more.classList.remove("more-splash")
        document.body.style.overflow = "";   
    };

    btnsMore.forEach(function(elem){
        elem.addEventListener("click", showModal);
    });
    more.addEventListener("click", showModal);
    popupClose.addEventListener("click", closeModal);

    //remove modal after "esc" press
    document.body.onkeyup = function (event) {
        event.keyCode == 27 ? closeModal() : null;
    }; 
    // // BUTTONS "MORE" IN TABS AND AFTER TIMER. END


    // // TIMER START
    let deadLine = "2020-01-11T22:20:00";

    function getTimeFromNowToDeadLine(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        t < 0 ? t = 0 : t; //if time end and deadLine hasn't been update

        let s = Math.floor((t / 1000) % 60),
            m = Math.floor((t / 1000 / 60) % 60),
            h = Math.floor((t / (1000 * 60 * 60))); //h from 0 to infinity    
        //let hours = Math.floor((t/1000/60/60) % 24); //h from 0 to 24
        //let days = Math.floor((t/(1000*60*60*24))); //d from 0 fo inf

        return {
            "total": t,
            "hours": h,
            "minutes": m,
            "seconds": s
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            h = timer.querySelector(".hours"),
            m = timer.querySelector(".minutes"),
            s = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeFromNowToDeadLine(endtime);
            h.textContent = t.hours;
            m.textContent = t.minutes;
            s.textContent = t.seconds;

            // //adding 0 berofe number
            (h.innerHTML.length < 2) ? (h.textContent = "0" + h.textContent) : h.textContent;
            (m.innerHTML.length < 2) ? (m.textContent = "0" + m.textContent) : m.textContent;
            (s.innerHTML.length < 2) ? (s.textContent = "0" + s.textContent) : s.textContent;

            if (t.total <= 0) {
                clearInterval(timeInterval)
            };
        };
    };
    setClock("timer", deadLine);
    // // TIMER END

    // // FORM START
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failture: "Что-то пошло не так..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");

        //below 2 lines with settings for classic php server
        //request.setRequestHeader("Content-Type", "aplication/x-www-form-urlencoded");
        //request.send(formData);


        //below lines with settings for node js server, where need send json data
        request.setRequestHeader("Content-Type", "aplication/json; charset=utf-8");
        let formData = new FormData(form);
        
        let obj = {};
        formData.forEach(function(value,key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        //after press submit 
        request.addEventListener("readystatechange", ()=>{
            if(request.readyState <4){
                statusMessage.innerHTML = message.loading;
            }else if(request.readyState === 4 && request.status == 200){
                // form.innerHTML = "";
                // form.appendChild(statusMessage);
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failture;
            }
        })

        //clear inputs after sending form data
        for(let i=0; i<input.length; i++){
            input[i].value = "";
        }

    });
    // // FORM END
});