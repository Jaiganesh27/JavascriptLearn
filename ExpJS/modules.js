// local modules
// core modules
// third party modules

// local modules are user defined modules that will be accesible by other fiels using export and import
function myfunc(){
    console.log("Hii Jaiganesh");
}
myfunc();


// export and import 
var imp = require('http');
// module export
var text = "My name is jai";

module.exports.text  = text;
module.exports.myfunc = func; 

// module

class Mod{
    constructor(){

    }

    disp =()=>{
     console.log("i ma display in mod class");
    }
}

module.exports.class = Mod;

// mod
module.exports.good = ()=>{
   console.log(" iam good function");
}
module.exports.createdate= ()=>{
    console.log("i will create date ");
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth();
    let dd = d.getDate();
    let temp = `${yyyy}-${mm}-${dd}`;
    return temp;
}