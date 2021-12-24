//hoisting with variables and functions declarations and expresions
var x = 10;
console.log(x);
func1();
function func1(){
    console.log(x,"while hoisting");
    var x = 3;
    console.log(x,"after hoisting");
    insidefunc();
function insidefunc(){
    console.log("x value inside function",x);
    if (x === 10) {
   console.log(x,"while hoisting");
    // var x = 6;
    console.log(x,"after hoisting");
    var expLocal = function (){
    return console.log("local exp function caled!");
}
    expLocal();
    }

}
}

var expGlobal = function (){
    return console.log("global expression function caled!");
}


console.log("expression called",(expGlobal));
console.log(x,"global variable after all operations",x);