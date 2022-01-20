let val = require('./modules')

val.myfunc();
console.log(val.text);

var g  = new val.class();
g.disp();

ndate = val.createdate();
console.log(`today date is : ${ndate} `);