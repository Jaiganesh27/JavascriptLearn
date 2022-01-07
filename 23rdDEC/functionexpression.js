// while hoisting a function declaration is accepted when we call it on before declaration or after declaration
// but when we call a function expression hoisting only accepted when we call after it declared or initialised
// otherwise it will make an error.

func1();
function func1(){
    console.log("function one called!!");
}
// func2(5,6);
var func2 = function (a,b){
    let c = a + b;
    console.log("c",c);
}


