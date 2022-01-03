arr = ['mango','orange','pineapple','123','orange','potato','orange']
temp = arr.splice();
console.log(arr);
console.log(temp);


// IndexOf
// indexof will return firt element value of the search element from the search index
// syntax: array.indexOf(searchelemnt,fromindex)
temp = arr.indexOf(123); //it will usestrict to index ===
console.log(temp);
temp = arr.indexOf('orange',3);
console.log(temp);

// LastIndexOf
// lastindexof will return firt element value of the search element from the search index
// syntax: array.indexOf(searchelemnt,fromindex)
temp = arr.lastIndexOf(123); //it will usestrict to index ===
console.log(temp);
temp = arr.lastIndexOf('orange',3);
console.log(temp);

const userArray = [{name:'jai',age:21},{name:'raju',age:25}]
const numberarray = [1,2,3,4,5,6,7,8,9];



// forEach
// we cannot break foreach loop
// it will undefined
// array.forEach(function(currentValue, index, arr), thisValue)
let arryx = [];
let tempovar = numberarray.forEach(i => arryx.push({name:'Name'+ i, age: i*2}))
console.log(arryx);
console.log(tempovar);


let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function square(value) {
  console.log(value * value);
}
numbers.forEach(square);

let index = 3;
let arrayvalues = [10,20,30,40,50,60,70,80,90,100]
console.log(arrayvalues);
arrayvalues.forEach(index => 1,
    console.log(index * 2)
    )