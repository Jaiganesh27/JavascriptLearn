// we dont need a return value
// it is one liner func
var arrow = (a) => a * a;
//   var arrow = (a, b) => {
//     return a + b;
//   };

arrow();
//   console.log(arrow(5, 4));
const uname = 'hi';

//arrow function gets it parent scope value as when we call this keyword
function normal() {
  this.uname = 'waterbottle';
  this.bottleIsFull = function () {
    console.log(this.uname);
    console.log(this);
  };
  this.bottleIsFullArrow = () => {
    console.log(this.uname);
    console.log(this);
  };
}
const obj = new normal();
const x = obj.bottleIsFullArrow;
const y = obj.bottleIsFull;
// obj.bottleIsFull();
// obj.bottleIsFullArrow();
x();
y();

//short hand function doesnt need function name or key value
// arrow functions also know as shorthand function
const obje = {
  short() {
    console.log('hii');
  },
};
short = () => {
 console.log("hiii am working");
}
short();
// obje.short();
// console.log(obje);

function arrowex() {
  let shortarrow = () => {
    console.log('short hand function for arrow method');
  };
  shortarrow();
  // console.log();
}
arrowex();