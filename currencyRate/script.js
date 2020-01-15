inputs = document.querySelectorAll("input");

console.log(inputs[0])
inputs[0].addEventListener("input", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/currencyRate/current.json");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send();


    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4 && xhr.status == 200){
            let data = JSON.parse(xhr.response);
            inputs[1].value = inputs[0].value * data.usd;
        } else{
            inputs[1].value = "Error";
        }
    });
});