console.log("Try Catch Example ");

var username;
var mobno;
var emailid;
let nameValid =false;
let numbevalid = false;
let emailvalid = false;
while(nameValid==false)
{
console.log("in username while");
try{
     let temp = prompt("Enter Your  Name : ");
    let regexp = /^[a-zA-Z]*$/gi
    nameValid = regexp.test(temp);
    if(nameValid==false)
    throw new Error("Please Type Alphabets in name");
    username = temp;
}catch(err){
    alert(err);

}
    finally{
        console.log("I am Always printing!!");
}
}
while(numbevalid==false){
    console.log("in mobile while");
try{
    let temp = prompt("Enter Your  Mobile Number: ");
    let regexpnum =/^\d+$/g ///^[0-9]+$/g  /\d+/
    numbevalid  =  regexpnum.test(temp);
    if(numbevalid==false)
    {
    let err=  new Error("Please Type Numbers :'0-9'");
    throw err;
    }
    mobno =temp;
}catch(err){
    alert(err);

}
    finally{
        console.log("I am Always printing!!");
}
}
console.log(`Your Name is :${username}\nYour Mobile No is :${mobno}`);


while(emailvalid==false){
    console.log("in mobile while");
try{
    let temp = prompt("Enter Your  Email Id: ");
    let emailregexp =/^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/g//jaingehs44@gmail.com
    emailvalid  =  emailregexp.test(temp);
    if(emailvalid==false)
    throw new Error("Please Type Your Email Id ");
    emailid = temp; 
}catch(err){
    alert(err);

}
    finally{
        console.log("I am Always printing!!");
}
}

console.log(`Your Email ID is :${emailid}`);