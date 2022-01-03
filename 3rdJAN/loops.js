// console.log("hii jaiganesh");
SArray = ['jaiganesh',21,'junior','chennai',9000050000];
SObject = {
    UName:'jaiganesh',
    UAge:21,
    UPos:'junior',
    ULoc:'Chennai',
    UMobile:'9000050000'
}
SString = 'I am Sample String';

// Diff while for in loop 
for(let loop in SArray)
    console.log(loop,SArray[loop]);
for(let loop in SString)  
    console.log(loop,SString[loop]);
for(let loop in SObject)
    console.log(loop ,SObject[loop]);


// Diff for of loop
for(let loop in SArray)
console.log(loop,SArray[loop]);
for(let loop in SString)  
console.log(loop,SString[loop]);
for(let loop in SObject)
console.log(loop ,SObject[loop]);
