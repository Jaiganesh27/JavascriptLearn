console.log("hii jaiganesh");

// object creating from function using normla function
function normalfunction(names){
    let obj = {}; //In this way newly create object
       obj.names  = names, 
        obj.greet  = () =>{
        console.log(`Hi my name is ${names}`);
    }
    return obj;   //And return the object
}

let obj1 = new normalfunction('dell');
console.log(obj1);
let obj2 = new normalfunction('hp');
console.log(obj2);
obj1.greet();
obj2.greet();


// object creating using constructor function.

function Office(name) {
this.name = name; //we dont need explicit object and return 
this.Officemsg = () =>{
    console.log(`Hii ${name} here is your office mailid id!`);
}
}

let staff1 = new Office('Ramu');
console.log(staff1);
staff1.Officemsg();



// normal methods vs prototype methods

// in normal methods we create in function are also create a copy of thier objects 
// but in prototype methods it will not copy .

// normal methods using constructor function
function Offergenerate(product,offer){
   this.product = product;
   this.offer = offer;
   this.normalMethod = function(){
       console.log(`I am normal method using constructor function`);
   }
}

// method created using prototype 
Offergenerate.prototype.displayoffer = function(){
     console.log(`the offer of the ${this.product} is ${this.offer}`);
   }

// Offergenerate.prototype.normalMethod = function () {
//     console.log(`i am normal method i am  over writted`);
// }   

// console.log("i am class",Offergenerate);
// Offergenerate.normalMethod();
let dm = new Offergenerate('Dairy Milk','50%');
let kk = new Offergenerate('KitKat','55%');
// dm.normalMethod()
console.log(dm);
console.log(kk);
// dm.displayoffer();
// kk.displayoffer();
// dm.normalMethod();
// kk.normalMethod();

Offergenerate.prototype.displayoffer = function(){
    console.log(`${this.offer} is the offer for the ${this.product} product`);
}
dm.displayoffer();
kk.displayoffer();


// advantages of the prototype properties
// if we are creating prototype property it will be once set and we can call from it from our instances
// also it is faster than using normal methods as wel.
dm.normalMethod = function () {
    console.log(`i am normal method i am  over writted by dmobj`);
}
kk.normalMethod = function () {
    console.log(`i am normal method i am  over writted by kkobj`);
}
dm.normalMethod();
kk.normalMethod();

let obj3 = new Offergenerate();
console.log('dffsdff');
obj3.__proto__.normalMethod();