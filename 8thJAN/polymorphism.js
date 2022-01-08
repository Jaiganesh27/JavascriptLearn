class Teacher{
    constructor(){
        console.log("hii jai");
    }
}
let teaobj = new Teacher();
console.log(teaobj);

class Dc {

    constructor(){

    }
    display(names){
        console.log(`${names} is a amazing movie`);
    }
    static display(namese){
        console.log(`${namese} is excellent`);
    }
}
class DcFan extends Dc{
    constructor(){
        super();
    }
    display(names){
        console.log(`${names} ia tha lastest movie`);
    }
}

let b = new Dc();
b.display("superman");
Dc.display("batman");