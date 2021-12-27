// javascript objects
const obj = {
  // object are assigned with key value pair
  userName: 'jaiganesh',
  age: 21,
  loc: 'chennai',
  123: 'value',
  null: 30,
  undefined: [1, 2, 3, [{}], [[]], 5, 6],
  undefined: 43543,
  print: function () {
    console.log(`My name is ${this.userName} i am good!`);
  },
};

// const field = 'age';
// console.log(obj);
// // obj.print.call({name:'jai'});

// obj.print.call({userName:'jaigan'});

obj.print();
// obj.userName = 'google';
// obj.print();

//constructor function call
function User(name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log('my name is ' + name + " i'm " + age + ' old!');
  };
}

var insOne = new User('jai ', 12);
var insTwo = new User('ganesh ', 44);
insOne.print();
insTwo.print();
insTwo.loc = 'chennai';
console.log(insOne, insTwo);

// object creating types
var normalObject = {};

var tempobject = { name: 'hii' };
// without prototype
var protoobj = Object.create(null);
console.log(protoobj);
// with prototype
// inherit feautures to one to another
var nonprotoobj = Object.create(Object.prototype);
console.log(nonprotoobj);
// var objectvalue = new Object();
