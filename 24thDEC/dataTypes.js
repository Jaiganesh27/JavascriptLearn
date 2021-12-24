// datatypes in javascript
// primitive and non primitive data types 
// string , number , boolean , null , undefined ,symbol
// String
var names;
console.log(typeof names);
names = "jaiganesh";
console.log(typeof names);
names = 123;
console.log(typeof names);
names = true;
console.log(typeof names);
names = null;
// The value null represents the intentional absence of any object value
console.log(typeof names);
names = [10,"jai","blue",true];

console.log(typeof names);

function add(){
    console.log("hii");
}
console.log(typeof add);
function nullUndefinedCheck(){
    if(undefined == null){
        console.log("hii iam working");
    }

    if(undefined === null){
        console.log("hii iam working");
    }
}
nullUndefinedCheck();
// non primitive data types
// arrays
const cars = ["Saab", "Volvo", "BMW"];
console.log("arrays",cars);
const objectdata = {
    studentName: "jaiganesh",
    clg:"dbjain",
    area: "chennai",
    mobile:9000060000
};

objectdata.studentName = "google";
console.log("objectdata.studentdata",objectdata.studentName);
