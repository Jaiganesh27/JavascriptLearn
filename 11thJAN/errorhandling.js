// javascript has three types of errors
// syntax errors - when wee break rules of javscript syntaxes.
// run-time errors - while compile time exception error ex. method does'nt exist.
// logical errors - tough to find ex: expected output cant get becuase of bad code.


//  runtime errors - type , reference
// if we got syntax error it will not process complete code
// but in runime error till it get identified by interpeter
let val = "oodafternoon";
// var hello = val();         //--> type error -->runtime error it gets error .
 // --> breaking rules of syntax error
// var ale = alert("I am syntax error");  //--> runtime error ->reference error
//  var ale2 = alert("I am normal");
// console.log(names);     //--> reference error names doest exist;

// alert"Hi  Error handling"); --> //it will always doest run code
// aler("Hi  Error handling"); --> //it will run till its identified by interperter.
arr = [1,2,3,4,5];
// arr.length = 30**30; //-->range error
// logical error
// logic errors doest easily identifiable system runs code ,its based on own mistakes.

function add(a,b) {
return a-b;   
}
function sub(a,b){
    return a+b;
}
console.log("hii jai");
console.log(add(5,5));  //10
console.log(sub(10,5)); //5

let a = 10; 
let b = 4;
// we can catch runtime errors with error or exception handling
try{
    // aler("Hi  Error handling");
    if(a < 0 || b < 0)
    var range = new RangeError("Please Enter Postive values");
    // console.log(range);

    throw range; //string number boolean f
     
    console.log("hii");//unreachable code
}
catch(err){
   console.log(typeof err,err);
}
finally{
   console.log("completed!!");
}


// range,uri,refrnce,syntax,eval,type errors inherits from error 


// console.log("value",value);
let vale;
console.log(vale)
vale = value;
console.log(typeof vale);
try{
   if(!value){
    throw new Error("You're Updating a Value in Empty Array");
   }
    
    value.push(10);
}
catch(err){
    console.log(err);
}
finally{
  console.log("i ma finally block ");
}