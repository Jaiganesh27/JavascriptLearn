// browser example
//Created an abstract class (constructor function)
function Employee()
{
this.empName="empName";
if(this.constructor === Employee){
throw new Error("You cannot create an instance of  Abstract Class");
}
};
// Method (function) of our abstract class
Employee.prototype.display = function()
{
return "Employee name is: "+this.empName;
}
//Created a subclass (constructor function)
function Manager(fullName)
{
this.empName = fullName;
}
//Created an object of subclass (extending abstract class)
Manager.prototype=Object.create(Employee.prototype);
var mang=new Manager("Aniket Davda");
// console.log(mang.display());
console.log(mang);
mang.empName = "jaiganesh";
mang.display();
console.log(mang);