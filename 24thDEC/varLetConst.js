// Diff Between functions const

// local scope and global scope
var a;
var a = 10;
a = 20;
varibale = 10;
console.log("var a",a);

let b;
// let b = 10;
b = 10;
console.log("let  b",b);
//let  its used for inside a functions  loops if its not needed in 
// global scope


const c = 20;
// c = 10;
console.log("const c",c);
//const is used to declare a variable
function blockScopeChecker() {
// we can access global scope varibles in local scope
 console.log("var a",a);
 console.log("let b",b);
 console.log("const c",c);
 console.log("varibale",varibale);
var d = 10;
let e = 20;
console.log("const f",f);
const f = 30;
noname = 50;
noname = 40;
console.log("const f",f);
}

// block scope variables cannot be accessed in global scope
console.log("var d",d);
console.log("let e",e);
console.log("const f",f);
console.log("varibale",varibale);
blockScopeChecker();
console.log("unnamed varible",noname);
blockScopeChecker();