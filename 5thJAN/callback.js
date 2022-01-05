let val;
setval = (num) => {
   val = num;
}
function myfunc(num) {
    console.log("hii myfunc");
    console.log(val)
    setval(num);
    console.log(val)
}
myfunc(25);