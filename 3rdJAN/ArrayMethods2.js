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
temp = arr.lastIndexOf('orange'); //it will usestrict to index ===
console.log(temp);
temp = arr.lastIndexOf('orange',3);
console.log(temp);

const userArray = [{name:'jai',age:21},{name:'raju',age:25}]
const numberarray = [1,2,3,4,5,6,7,8,9];



