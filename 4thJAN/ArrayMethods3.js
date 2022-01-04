// forEach
// we cannot break foreach loop
// it will retrn undefined
// array.forEach(function(currentValue, index, arr), thisValue)
let arryx = [1,2,3,4,5];
// let tempovar = numberarray.forEach(i => arryx.push({name:'Name'+ i, age: i*2}))
// console.log(arryx);
// console.log(tempovar);
let tempovar = arryx.forEach((i,index,arryx) => {
 arryx[index] = i * 10;
})
console.log(arryx);
console.log(tempovar);

let numbers = [1, 3, 4, 9, 8];

// function to compute square of each number
function square(value) {
//   console.log(value * value);
}
numbers.forEach(square);

let index = 3;
let arrayvalues = [10,20,30,40,50,60,70,80,90,100]
// console.log(arrayvalues);
arrayvalues.forEach(index => 1,
    // console.log(index * 2)
    )


let studentData = [{name:'ramu'},{name:'shiva'},{name:'guru'},{name:'krishna'},{name:'rakul'}]
studentData.forEach(rollNoCreater)
function rollNoCreater(element){
    console.log("i am element",element)
    let temp =  studentData.indexOf(element);
    console.log(temp);
    studentData[temp] = {...element,age:temp*1}
    // console.log(studentData[temp].push('jaiganesh'));
    console.log(studentData);
}




const arr=[1,2,3,45,5];
arr[0] = 5;
// arr = [34,4,4];
// console.log(arr);

// filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
//  if no values pass the test it will return empty array
let samplearr = arr.filter((item) => item === '2')
console.log(samplearr);
samplearr = studentData.filter((sdata) => sdata.name ==='guru')

console.log(samplearr);
passfiltertest = (testval) =>{
   
}

// map
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
let samplesarr ;
console.log(arr)
samplesarr  = arr.map((item) => {

console.log(samplesarr)
return item*2
}
)
console.log(samplesarr)
// console.log(samplearr);
// let foreachsamplearr = arr.forEach((item) => console.log(item*2));
// console.log(foreachsamplearr[0], "ghtdghc");


// sort
// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.
let numeric = [1,2,3,4,5,10,2,545,64,6,76]
let alpha = ['banana','grape','mango','pineapple','orange']
console.log(numeric.sort());
console.log(alpha.sort());
console.log(numeric.sort((a,b) => a-b));



//join
// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,). 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();
console.log(text);
// for(let item of text)
// console.log(item)



//reverse
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.
fruits.reverse(1,2);
console.log(fruits);


//fill
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.
// fill(value) , fill(value, start),  fill(value, start, end)

fruits.fill('kiwi',0,2);
console.log(fruits);

// find
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method retuns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
let numerics = [1,2,3,4,5,10,2,545,64,6,76]
let tempo = numerics.find((element) => element == 5)
console.log(tempo);
console.log(numerics);


//find index
// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array. 
 numerics = [1,2,3,4,5,10,2,545,64,6,76]
 tempo = numerics.findIndex((element) => element == 5)
console.log(tempo);
console.log(numerics);


// includes
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// array.includes(element, start)
let arrayincludeex = [1,2,3]
arrayincludeex.includes(2)         
arrayincludeex.includes(4)         
arrayincludeex.includes(3, 3)      
arrayincludeex.includes(3, -1)     
arrayincludeex.includes(NaN)     
arrayincludeex.includes(3)   
// return boolean

// toString
// The toString() method returns a string with array values separated by commas.
// The toString() method does not change the original array.
let val = arrayincludeex.toString();
console.log(val,typeof val);