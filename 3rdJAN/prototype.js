console.log("jaiganesh");

myArray = [1,2,3,4,5,6,7];
console.log(myArray);


function Prototype(name,age){
    this.name = name;
    this.age = age;
    this.protoPrintone = () => {
        console.log(`Name : ${this.name} , Age: ${this.age}`);
    }
}
let Proto1 = new Prototype('');
let Proto2 = new Prototype('raja',30);
// Proto2.prototype.loc = 'chennai';
// console.log(Proto2);
Proto2.protoPrint = function (){
    console.log(`Name : ${this.name} , Age: ${this.age}`);
}
Object1 = {
    name:'ramesh',
    age:25,
    place:'chennai'
}

Object1.name;
NameStr = 'jaiganeesh';
console.log(NameStr.length);
Proto2.protoPrint();

Proto1.protoPrintone();