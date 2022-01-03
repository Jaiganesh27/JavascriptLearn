// Array Methods
// Javascript 1.1 August 1996 --> join, reverse, sort and split.
// JavaScript 1.2 June 1997   --> concat and slice.
// ECMA 1 (Javascript 1.3)    -->concat, pop, push, shift, slice and splice
// ECMA 3 March 2000 (Javascript 1.5) -->toString ,sort, splice, unshift, toLocaleString , concat ,join , pop ,push ,reverse ,shift and slice .
// EcmaScript 5–2009 --> every,filter,forEach, indexOf , lastIndexOf, map,reduce and some
// ECMAScript 2015 (EcmaScript 6)  --> entries,keys, values,find,findIndex, fill andcopyWithin.
// ECMAScript 2016 and on -->Array.prototype.includes,  Array.prototype.flatMap , Array.prototype.flatten

// Array - Length
//  used to show the length of an array
const city = ['chennai','madurai','salem','namakkal','trichy'];

console.log(city.length);
// chage length of the array
// city.length = 8;
// console.log(city,city.length);

// Array - Push
// ---------------
// push has parameters that values to be pushed to existing array
// adds an element in last index of array
// wil add element in last place of array
 let temp = city.push('kancheepuram',43,'NH45');
// console.log(temp);
// console.log(city);

// Array - Pop
// ------------
// will remove element in last place of array
// pop does not have any parameters
temp = city.pop();
// console.log(temp);
// console.log(city);


// Array - Unshift
// ----------------
// will add an element to the top of the array
// unshift has parameters that values to be pushed to existing array to the top
let coolDrinks = ['cola','pepsi','miranda'];
console.log("before change",coolDrinks);

coolDrinks.unshift('7up');
console.log("after change",coolDrinks);



// Array - shift
// ----------------
// will remove an first element in the array
// shift has parameters that values to be pushed to existing array to the top
// shift does not have any parameters
coolDrinks = ['cola','pepsi','miranda'];

console.log("before change",coolDrinks);
coolDrinks.shift();
console.log("after change",coolDrinks);



// Array - Slice
// --------------
// will create new array from existing array start to end
//arr.slice(start, end) slice and return value
let sliceArray =[1,2,3,4,5,6,7,8]; 
// let value = sliceArray.slice(2);
// console.log(value);
// console.log(sliceArray);

value = sliceArray.slice(0,-1);
value = sliceArray.slice(-3);
console.log(value);

let human = {
    name: "David",
    age: 23,
  };
  
  let arr = [human, "Nepal", "Manager"];
  let new_arr = arr.slice();
  console.log("new array",new_arr);
  // original object
  console.log(arr[0]); 
  
  //  changes to the object in new array
  new_arr[0].name = "Levy";
  
  // changes are reflected
  console.log(arr[0]);



// Array - Splice
// ---------------
//splice syntaxe -->arr.splice(start, deleteCount, item1, ..., itemN)
// it will change affect and change original array
// from third param will be new value to add in array
let numbers = [2, 3, 5, 7, 9, 11];


let removeelement = numbers.splice(1,1, 13,81);
console.log("removed elements",removeelement);
console.log("numbers",numbers);
// ex: 1,-1,  1,-2 , 1,  6,2

