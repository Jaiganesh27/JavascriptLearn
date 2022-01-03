// mango price 
let mangoP;
mangoBasePrice = 20;
console.log(mangoP);
mangoP = 40;
console.log(mangoP);
if(mangoP == 20){
    if(mangoBasePrice - mangoP == 0 )
    console.log(`You have $${mangoP} You can buy 1kg of Mangoes`);
}
else if(mangoP == 30){
    if(mangoP - mangoBasePrice  == 10 )
    console.log(`You have $${mangoP} You can buy 1.5kg of Mangoes`); 
}
else if(mangoP == 40){
    if(mangoP   ==  mangoBasePrice*2 )
    console.log(`You have $${mangoP} You can buy 2kg of Mangoes`);
}
else{
    console.log(`Wrong input given please put valid amout`);
}

dateArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let tempday = new Date().getDay();
// Switch Case
// weekday = weekday.getDay()
weekday = dateArray[tempday];
console.log("weekday",weekday);
switch(weekday)
{
    case 'sunday':
        console.log('Today is Sunday!');
        break;  
    case 'monday':
        console.log('Today is Monday!');
        break; 
    case 'tuesday':
        console.log('Today is Tuesday!');
        break; 
    case 'wednesday':
        console.log('Today is Wednesday!');
        break;       
    case 'thursday':
        console.log('Today is Thursday!');
        break; 
    case 'friday':
        console.log('Today is Friday!');
        break; 
    case 'saturday':
        console.log('Today is Saturday one!');
        break; 
    // case 'saturday':
    //     console.log('Today is Saturday two!');
    //     break; 
    default:
        console.log("Wrong input got!");    
}


