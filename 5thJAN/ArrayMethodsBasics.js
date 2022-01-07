// concat
arr1 = [1,2,3,4,5];
arr2 = ['a','b','c','d','e','f']
arr3 = arr1.concat(arr2);
console.log(arr3);

//Array.isArray
isarr = {name:'hii',value:1}
isarr = [1,2,3,4,5];
let temp = Array.isArray(isarr);
console.log(temp)

//some 
// it will return boolean not affect array.
const ages = [3, 10, 18, 20];
temp = ages.some((a) => a > 15)
console.log(temp);

//every 
// it wil return boolean not affect array.
temp = ages.every((a) => a > 2)
console.log(temp);


//Array.from iterable objetcts
temp = Array.from("{name:'jai', value:4}")
console.log(temp,typeof temp);

// copywithin
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0);

console.log(fruits)
fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);

console.log(fruits)


// flat
flatarray = [0, 1, 2, [[[3, 4]]]]; [0,1,2,3,4];
temp = flatarray.flat(2);
console.log(temp);
[0,1,2,3,4]
// flatmap
// combination of flat and map methods
let numberarr = [1, 2, 3, 4,5];
flatmaparr = [];
flatmaparr = numberarr.flatMap((ele) => [ele*3]);
console.log(flatmaparr);

// reduce
let numarr = [2,4,6,8,10];
let objarr = [{name:'jack',amt:50},{name:'rose',amt:20},{name:'michael',amt:10},{name:'chris',amt:100}]
reducenumarray = numarr.reduce((firstval,secondval) => (firstval + secondval));
reduceobjarr = objarr.reduce((firstval,secondval) => (firstval + secondval.amt-1),1); 
console.log(reducenumarray,"reduce num array");
console.log(reduceobjarr,"reduce object array")

// reduce right
let curind = 1;
 numarr = [2,4,6,8,10];
objarr = [{name:'jack',amt:50},{name:'rose',amt:20},{name:'michael',amt:10},{name:'chris',amt:100}]
reducenumarray = numarr.reduceRight((firstval,secondval) => (firstval + secondval));
reduceobjarr = objarr.reduceRight(function (firstval,secondval) {
    firstval + secondval.amt;
},0); 
console.log(reducenumarray, "reduceright array");
console.log(reduceobjarr,"reduce right objectarray");


