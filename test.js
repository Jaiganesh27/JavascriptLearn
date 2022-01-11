str = "(() => 'hii')";
console.log("before eval",str);
result = eval(str);
console.log("after eval",typeof result);
console.log(result());
var result2 = function add(){ return 1+2}
console.log(result2());




str = "(function add(){ return 1+2})";