// Json  - javascript object Notation 
// Json is used for sharing data between server and user .
// Json is easy to understand and usable than xml 
// json uses object format and xml uses tag format. 
// json looks like obj but it key values also " " in doyble quote.
// Data is in name/value pairs , Data is separated by commas,Curly braces hold objects ,Square brackets hold arrays
let jai = JSON.parse('{"username":"jaignesh","location":"chennai"}'); //used to convert json to object format
console.log(jai);
let strjai = JSON.stringify(jai);  //convert to json format
console.log(strjai);
// josn  value should b e string,number, object,array,boolean,null;
wallet = {
    photo:'myphoto',
    card1:'debitcard',
    card2:'creditcard',
    cash:500,
    visitcard:function name() { return console.log('jaignaesh');},
    date: new Date()   
}
walltejson = JSON.stringify(wallet);
console.log(walltejson);
walletobj = JSON.parse(walltejson);
console.log(walletobj);

console.log(eval(walletobj.visitcard))
console.log(wallet);
// JSON doesn't use end tag
// JSON is shorter
// JSON is quicker to read and write
// JSON can use arrays
// func = eval(wallet.visitcard);
// console.log(eval(func));
// In JSON, functions are not allowed as object values.
// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
// json array
const josnarray ='["Ford", "BMW", "Fiat"]'
const jsarray = ["Ford", "BMW", "Fiat"]
let arr = JSON.parse(josnarray);
console.log(arr);
console.log(arr[0]);
arr = JSON.stringify(jsarray);
console.log(arr);
console.log(arr[2]);

// convert iso string to normal date
console.log(console.log(wallet.date.toString()));




// srcfile = './dummy.json';
let obj = JSON.parse(dummy);
console.log(obj);
// javascript - variables, arrays methods functionstypes , prototypes , oops,json 