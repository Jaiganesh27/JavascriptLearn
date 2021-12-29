//without initilising
var testVar; //y
let testLet; //y
const testConst  = 5 ;//n
const obj = {
    names:'sdff',
    age:343
 }
 console.log(obj);
//    console.log("testVarConsole",testVar);
//    console.log("testLetConsole",testLet);
//    console.log("testConstConsole",testConst);

// // // with initialising
// var testVar = 'it is var string'; //y
// let testLet = 'it is let string'; //y
// const testConst = 'it is const sting'; //y
// console.log('testVarConsole', testVar);
// console.log('testLetConsole', testLet);
// console.log('testConstConsole', testConst);

//redeclare in samescpe
// var testVar = 41;  //y
// let testLet = 31; //n
// const testConst = 3443; //n

//redeclare in localscope
function testinVariables() {
var testVar = 41; //y
let testLet = 31; //y
const testConst = 3443; //y

  console.log('testVarConsole', testVar);
  console.log('testLetConsole', testLet);
  console.log('testConstConsole', testConst);
}

//reassigning or chage values of variable
testVar = 41; //y
testLet = 31; //y
// testConst = 3443; //n

// var vs let
console.log(x);
let x = 5;
console.log(x);
console.log(testVar);


testConst = 59;
console.log()
obj.age = 30;
console.log(obj);