// for(let i=1 ;i<10;){
//     console.log("hii",i);
// }
// console.log(i);
// let value = 1;
// ++value;
// value++;
// console.log("value",value);
// console.log("value++",value++);
// console.log("++vlaue",++value);
// console.log(value);




//do while
// let i = 4;
// do{
//    console.log("before",i);
//     // i++;
//     console.log("after",i);
// }while(i<5)


// while loop
// value = 0;
// let i = value;
// while(i<=5){
//     console.log("before",i);
//     i++;
//     console.log("after",i);
// }


//break , continue
// let i = 5;
// console.log(i);
goouter:
for(let i = 1 ;i<=3;i++){
    console.log("outer loop running!!");
    for(let j = 1; j<5; j++)
    {
    if(i==2){
        console.log("inside loop running!!");
        // continue goouter;
        break goouter;
    } 
    console.log("j loop running");
   }
    console.log("hii",i);
}
// console.log(i);




