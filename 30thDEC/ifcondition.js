const emailId = 'jaiganesh@gmail.com';
const userName = 'jaiganesh';
let password = 12345;

//falsy values
// false,0,-0,On,emptystring,null,undefined,NaN

falseValueCheck = () => {
    if(false)
    console.log('this wil not print for falsy values');
}


function checkIfCon(){
// single line if condition
    if( userName === 'jaiganesh123' )
        console.log(`Hii ${userName}`);
        console.log('This console will not print');

// multiline if condition        
    if( userName === 'jaiganesh' ){
    console.log(`Hii ${userName}`);
    console.log('This console will not print');
    }
}
checkIfCon();


//if condition
let conValue = ( "5" === '5' );
// conValue = '';
console.log(typeof conValue);
// conValue = parseInt(conValue);
console.log('conValue :',conValue);
if(conValue)
{
    console.log("Your Name Is Jaiganesh");
}


//
function checkAssignment() {
if((conValue = userName))
    console.log(`'Assigning operation on if condition 
value of an assigment is : ${conValue}'`);
}
checkAssignment();
// if else condition
// if expression will check condition whether it is true or Notification.
// otherwise it will return else block 
if(userName === 'jaiganesh'){
    console.log(`Welcome ${userName} !`);
 console.log(`Your  EmailId : ${emailId} and 
Your Password : ${password}`);
}
else{
    console.log(` Authetication Failed!!`);
    console.log(`Pls try with another usernme`);
}

