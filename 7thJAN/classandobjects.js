class Bike{
    model = 2015;
    year = 2000;
      constructor(model,year){
     this.model = model;
     this.year = year;
  }
  bikeStart = () =>{
      console.log(` ${this.model} bike ${this.year} started!!`);
  }
}


let tvsobj = new Bike('apache 4v',2015);
tvsobj.bikeStart();

// bike(model,year){
//     this.model = model;
//     this.year = year;
// }
// class cannot be redeclared and class uses strict mode every class uses constructor.

// fucntion expression using class
var cls = class Bike{
    model = 2015;
    year = 2000;
      constructor(model,year){
     this.model = model;
     this.year = year;
     this.bikeStart = () =>{
        console.log(` ${this.model} bike ${this.year} started!!`);
    }
  }
 
}
// let clsobj = new cls('yamaha',2020);
// clsobj.bikeStart();
// console.log(clsobj);
var cls = class Bike{
    model = 2015;
    year = 2000;
      constructor(model,year){
     this.model = model;
     this.year = year;
     this.bikeStop = () =>{
        console.log(` ${this.model} bike ${this.year} started!!`);
    }
  }
 
}
let clsobj = new cls('yamaha',2020);
// clsobj.bikeStart();
console.log(clsobj);
var clsobj2 = new cls('mt-15',2030);
clsobj2.bikeStop();
console.log(clsobj2);
console.log(clsobj.year);

let table = Object.create(({names:'jai',age:20}));
console.log(table);
let desk = {};
console.log(table.names);