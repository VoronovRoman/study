//'use strict'

// if (2*4==0) {
//     console.log("Working!")
// } else{
//     console.log("Not working... :(")
// }

let num = 50

//if else else-if
if (num < 49) {
    console.log("It's low... :(")
} else if (num > 100) {
    console.log("Too much")
} else {
    console.log("right")
}

//ternary operator
(num == 50) ? console.log("right"): console.log("wrong")

//switch-case operator

z= +(prompt("input a number"))
console.log(typeof(z))
switch (true) {
    case (z < 49):
        console.log("wrong");
        break;
    case (z > 100):
        console.log("too much");
        break;
    case (z > 80):
        console.log("much");
        break;
    case 50:
        console.log("right");
        break;
    default:
        console.log("something goin not right");
        break;
}