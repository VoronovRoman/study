window.addEventListener("DOMContentLoaded", function(){
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


// // MY TABS
    let parentTabName = document.querySelector(".info-header"),
        tabName = document.querySelectorAll(".info-header-tab"),
        tabContent = document.querySelectorAll(".info-tabcontent");
    console.log(parentTabName)
    console.log(tabName)
    let x = tabName[0];
    console.log(x)
    console.log(tabContent)

    function hideTabContent(a){
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        };
    };
    hideTabContent(1)

    function showTabContent(b){
        if(tabContent[b].classList.contains("hide")){
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        };
    };

    parentTabName.addEventListener("click", function(event){
        if(event.target && event.target.classList.contains("info-header-tab")){
            for(let i=0; i<tabContent.length; i++){
                if(event.target == tabName[i]){
                    hideTabContent(0)
                    showTabContent(i)
                    break;
                }
            }
        }
    })
// // MY TABS END
});