// 'use strict'
let array = ['jai',21,'chennai','junior',600100]
// console.log(array);

const obj =  {
	"userId": 1,
	"id": 1,
    123:'mobile',
    null:'null value entered',
    undefined:'undefiend value entered',
	"title": "delectus aut autem",
	"completed": false
}

for(let val of array)
//  console.log(val);

// for(let val in obj)
// console.log(` ${obj['undefined']}`);


// console.log(obj[123]);


jsonData = {
    "users": [
      {
        "id": 0,
        "name": "Adam Carter",
        "work": "Unilogic",
        "email": "adam.carter@unilogic.com",
        "dob": "1978",
        "address": "83 Warner Street",
        "city": "Boston",
        "optedin": true
      },
      {
        "id": 1,
        "name": "Leanne Brier",
        "work": "Connic",
        "email": "leanne.brier@connic.org",
        "dob": "1987",
        "address": "9 Coleman Avenue",
        "city": "Toronto",
        "optedin": false
      }
    ],
    "images": [
      "img0.png",
      "img1.png",
      "img2.png"
    ],
    "coordinates": {
      "x": 35.12,
      "y": -21.49
    },
    "price": "$59,395"
  }
  
let myArray=[];

console.log(jsonData);
myObj={
    name:'',
    work:'',
    dob:'',
    address:'',
    city:''
}
console.log(myObj);
myObj.name = jsonData.users[0].name;
myObj.work = jsonData.users[0].work;
myObj.dob = jsonData.users[0].dob;
myObj.address = jsonData.users[0].address;
myObj.city = jsonData.users[0].city;
console.log(myObj)
let  iter = 0;
for(let val of jsonData.users){
    myObj.name = jsonData.users[iter].name;  
    myObj.work = jsonData.users[iter].work;  
    myObj.dob = jsonData.users[iter].dob;
    myObj.address = jsonData.users[iter].address;
    myObj.city = jsonData.users[iter].city;
    // console.log("val",val);
    iter++;
    myArray.push(myObj);
}
// console.log(myObj);
console.log(myArray);
