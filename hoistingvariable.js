
var a = 10;
let b;
const c = 30;
let names = "gopi";
function testing(){
    let name = "gopi123";
    console.log(name);
    test2();
    function test2(){
        let name = "gopi12";
        console.log(name);
    }

}

console.log(names);
console.log(c);
testing();