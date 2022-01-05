let obj = {};
let arr = [];
console.log(obj);
console.log(arr);
// proto is the property hwne we crete arr or object it wil create --prote--
// object is root it will inherits array ,arr will create new arry


function Cube(){
    this.checcube = (a) =>{
        console.log(a*a*a)
    }
    
}

function arrproto(){
   this.checkcube = (a) =>{
    console.log(a*a);
   }
   this.toString = (a) => { 
    console.log(a.toUpperCase());
  }
}
arrproto.prototype = new Cube();

let arrob = new arrproto();
 

console.log(arrob);
arrob.checkcube(5);
// arr
arrob.checcube(5);
let str = 'jaiganesh';
arrob.toString(str);















