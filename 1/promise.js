// let drink = 0;

// function shoot(arrow){
//     console.log("You make a shoot..")

//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             Math.random()>.5 ? resolve({}): reject("Miss");
//         }, 3000);
//     });
//     return promise;
// }

// function win(){
//     console.log("You win");
//     (drink == 1) ? buyBeer(): giveMoney();
// }
// function buyBeer(){
//     console.log("Here's beer for You")
// }
// function giveMoney(){
//     console.log("Take money, bro")
// }
// function loose(){
//     console.log("You loose")
// }

// shoot({})
//     .then(mark => (console.log("HeadSHOT!")))
//     .then(win)
//     .catch(loose)