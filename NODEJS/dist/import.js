"use strict";

// // common.js = require
// // ES6 = import statement 
// import { default as a } from "./export.js";
// var add = require('./export');
// var {a , b} = require('./export');
// var add = require('./export');
// var 
// var b = a(5,6);
// console.log(b);
// // console.log(name);
// require uses execution of code 
// var add  = require('./export.js')
// var {add ,sub , multi} = require('./export.js')
// var {multi} = require('./export.js') //this feature added after apr16
// console.log(multi(5,5));
//  let {add} = require('./export.js')
//  console.log(add(5,5));
// var Value = require('./export.js')
//         let val =    new Value('matricschool',10);
//     console.log(val);
// import uses 
//   import {add}  from './export.js';
//   console.log(add(1,2))
//   import {add , sub} from './export.js';
// import * as n from "./export.js";
// console.log(n);
var val = require('./export');

console.log(val); // import * as val from './export.js';
//  new val.default('corporationschool',12);
// import http from 'http';
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//   }).listen(8080);