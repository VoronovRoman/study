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
        more.classList.remove("more-splash");
        document.body.style.overflow = ""; 
        form.removeChild(statusDiv);  
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
    // let message = {
    //     loading: "Загрузка...",
    //     success: "Спасибо! Скоро мы с вами свяжемся!",
    //     failture: "Что-то пошло не так..."
    // };

    // let form = document.querySelector(".main-form"),
    //     input = form.getElementsByTagName("input"),
    //     statusMessage = document.createElement("div");

    // statusMessage.classList.add("status");

    // form.addEventListener("submit", (event)=>{
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open("POST", "server.php");
    //     //below 2 lines with settings for classic php server
    //     //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     //request.send(formData);

    //     //below lines with settings for node js server, where need send json data
    //     request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    //     let formData = new FormData(form);
        
    //     let obj = {};
    //     formData.forEach(function(value,key){
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj);
    //     request.send(json);

    //     //after press submit 
    //     request.addEventListener("readystatechange", ()=>{
    //         if(request.readyState <4){
    //             statusMessage.innerHTML = message.loading;
    //         }else if(request.readyState === 4 && request.status == 200){
    //             // form.innerHTML = "";
    //             // form.appendChild(statusMessage);
    //             statusMessage.innerHTML = message.success;
    //         }else{
    //             statusMessage.innerHTML = message.failture;
    //         }
    //     })
    //     //clear inputs after sending form data
    //     for(let i=0; i<input.length; i++){
    //         input[i].value = "";
    //     }
    // });
    // // FORM END


    // FORM PROMISES START
    let message = {
        load: "Загрузка...",
        success: "Спасибо! В ближайщее время мы с вами свяжемся!",
        fail: "Что-то пошло не так..",
    };
    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusDiv = document.createElement("div");

    function sendRequest(method ,url, data=null){
        return new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = "json";
            xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

            xhr.onload = () => {
                if(xhr.status == 200){
                    resolve(xhr.response)
                }else{
                    reject(Error(xhr.statusText))
                }
            };
            xhr.onerror = () => reject(Error("Network Error"));

            xhr.send(data)
        })
    }

    function makeBodyData(){
        let data = new FormData(form)
        let obj = {};

        data.forEach(function(value,key){
            obj[key] = value;
        });
        let jsonData = JSON.stringify(obj);
        return jsonData;
    };

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        form.appendChild(statusDiv);

        sendRequest("POST", "server.php", makeBodyData())
            .then( () => {
                statusDiv.innerHTML = message.success
            }, () => {
                statusDiv.innerHTML = message.fail
            });
            for(let i = 0; i<input.length; i++){
                input[i].value ="";
            };
    });
    // FORM PROMISES END

    //SLIDER START
    let sliderItems = document.querySelectorAll(".slider-item"),
        prevBtn = document.querySelector(".prev"),
        nextBtn = document.querySelector(".next");

    // function hideImg(a){
    //     for(let i=a; i<sliderItems.length; i++){
    //         sliderItems[i].style.display = "none"
    //     }
    // }
    // //hideImg(1)

    // function showImg(b){
    //     for(let i=b; i<sliderItems.length; i++){
    //         sliderItems[i].style.display = "block"
    //     }
    // }
    // nextBtn.addEventListener("click", function(event){
    //     // for(let i = 0; i<sliderItems.length; i++){
    //     //     if(){
                
    //     //     }
    //     // }

    //     var currentSlide = 0;
    //     var z=1
    //     
    //     z++
    // })
    // let currentSlide = 1
    // function nextSlide() {
    //     goToSlide(currentSlide+1);
    // }
     
    // function previousSlide() {
    //     goToSlide(currentSlide-1);
    // }
    sliderItems.forEach(element => {
        element.style.display = "none"
    });
    sliderItems[0].style.display = "block"
    
    
    let currentSlide = 0

    function slider(n){
        sliderItems.forEach(e => {
            e.style.display = "none"
        });
        sliderItems[n].style.display = "block"
    }

    nextBtn.addEventListener("click", ()=>{    
        if (currentSlide+1 == sliderItems.length){
            currentSlide = -1; 
        }
        ++currentSlide
        slider(currentSlide) 
    });
    
    prevBtn.addEventListener("click", ()=>{
        currentSlide--
        if(currentSlide <0){
            currentSlide = (sliderItems.length - 1)
        }
        slider(currentSlide)     
    })
    
        
    // function slider(){
    //     for(let i=0; i<sliderItems.length; i++){
    //         sliderItems[i].style.display = "none";
    //     }
    //     sliderItems[currentSlide].style.display = "block";
    //     currentSlide++

    // }
    // nextBtn.addEventListener("click", ()=>{
    //     slider()
    //     if (currentSlide == sliderItems.length){
    //         currentSlide = 0;
    //     }
    // });

    // prevBtn.addEventListener("click", ()=>{
    //     if(currentSlide == currentSlide%sliderItems.length){
    //         currentSlide = (currentSlide%sliderItems.length)-1
    //         console.log(currentSlide)
    //     }
    //     slider()

  //})
//     function slider(n) {
//         let currentSlide = n;
//         sliderItems[currentSlide].style.display = 'block';
//         currentSlide = (currentSlide+1)%sliderItems.length;
//         sliderItems[currentSlide].style.display = 'none';

//     }


});