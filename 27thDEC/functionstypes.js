// iif immediately invoked function
(function cons(){
   console.log("hii");
})();
//function declaration
 function welcome(){
console.log("hii welcome");
 }
 welcome();
//functionvexpression
 var expi =  function (a){
  return console.log("a",a*a);
 }
//
 let funct = new Function("a","return a*a");
 console.log(funct(5),typeof funct);
 expi(5);
 //arrow function
 //generator function
 //recursive function
 //

