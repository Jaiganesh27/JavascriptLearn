var  add = function (a,b){
   return a+b;
}
var sub = function (a,b){
   return a-b;
}
 function multi(a,b) {
   return a*b;
}
// require exporting:
// obj/literal/function
// module.exports = "export file importing";
// module.exports = multi;
// module.exports =  {
//    add:add,
//    sub:sub,
//    multi:multi
// }


// es6import
// export var name = "es6export";
// export default function (a,b) {
//      a/b;
// }

// export {
//    add,
//    sub,
//    multi
// }
module.exports =  class School{
   constructor(name,section)
  { 
     this.name = name;
     this.section = section;
     console.log("Name and Section of the Students are",this.name,this.section);
 }
    
}
export default  class School{
   constructor(name,section)
  { 
     this.name = name;
     this.section = section;
     console.log("Name and Section of the Students are",this.name,this.section);
 }
    
}
