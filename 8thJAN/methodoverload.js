console.log("method overloading in javascript");
// method overloading is not supporting javascript it supports overriding
// it just override the last method as original method
class Teacher{
    // constructor(){
    //     console.log("hii jai");
     // } 
    constructor(name,age){
    name;
    age;  
        this.name = name;
        this.age = age;
    }
    display = () =>{
        console.log(`name is :${this.name} and 
age is :${this.age}`);
    }
    display = (datemethod) =>{
        //    this.dateval =  datemethod;
        //    console.log(dataval);
        //    console.log(datemethod.getFullYear());
        console.log(datemethod);
        }
    display = (uname) =>{
console.log(`name is ${uname}`);
    }
    display = (uname,uage) =>{
        console.log(`name is ${uname} age is ${uage}`);
    } 
   
}
let teaobj = new Teacher();
let teaobj2 = new Teacher('jaiganesh',21);
// console.log(teaobj2);
teaobj2.display();
teaobj2.display('mukund');
teaobj2.display('madan',10);
teaobj2.display(new Date());

