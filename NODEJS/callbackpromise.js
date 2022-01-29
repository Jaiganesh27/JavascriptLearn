// console.log("Execute 1st");

// setTimeout(() => {
//     func();
//     console.log("Time out Exit");
// }, 2000);

// console.log("Execute 2nd");
// var func = function(){
//     console.log("I am into the settimeout");
// }




// function showValue(val){
//     console.log("showfunc");
//   console.log(val)
// }
// function assignValue(n,callback){
//     console.log("assignfunc");
//     var val = sqValue(n);
//     callback(val);
// }
// function sqValue(sqNum){
//     console.log("sqfuncfunc");
//     return sqNum*2;
// }

// assignValue(5,showValue);


// // promise 
// let promise = new Promise(function(resolve,reject){
//      setTimeout(() => {
//          resolve("resolved ");
//         //  reject("rejected");
//      }, 3000);
// })
// promise.then((ele)=>console.log(ele));
// promise.catch((ele)=>console.log(ele));


// Growth of the Planet
// callback
function growthe(){
    setTimeout(() => {
        console.log("Seed Plant");
        setTimeout(() => {
        console.log("watered for plant")
        setTimeout(() => {
        console.log("Got small leaf");
        setTimeout(() => {
           console.log("Got more leaf plant morethan 30 centimeters");
           setTimeout(() => {
            console.log("small flower plant");
            setTimeout(() => {
                console.log("Got Rose flower Succesfully!");
            }, 2000);
           },3000);
        },4000)           
        }, 2000);
        },1000);
    }, 0000);
}

growthe();
// working perfectly but nested callback took confusing so this is caled callback hell.
// to overcome this situation we need promise based approach


growth = (work) =>{
    return new Promise(function (resolve,reject) {
        resolve(work() )
    })
}

growth(function (){ console.log("Seeding Plant");})
.then(()=>{
return growth(function (){ console.log("watered for plant");})})
.then(()=>{
growth(function (){ console.log("Got small leaf");})})
.then(()=>{
growth(function (){ console.log("Got more leaf plant morethan 30 centimeters");})})
.then(()=>{
growth(function (){ console.log("small flower plant");})})
.then(()=>{
growth(function (){ console.log("Got Rose flower Succesfully!");})})
.finally(()=> console.log("Pluck your flower"))
.catch((err)=>{
    console.log(err)
})



 async function grown(){
     try{
    await waitfortime(1000)
    console.log("Seeding Plant")
     await waitfortime(2000) 
    console.log("watered for plant")
    await waitfortime(5000)
    console.log("Got small leaf")
    await waitfortime(1000)
    console.log("Got more leaf plant morethan 30 centimeters")
    await waitfortime(3000)
    console.log("small flower plant")
    await waitfortime(2000)
    console.log("Got Rose flower Succesfully!")
     }
     catch(err){
       console.log(err);
     }
     
}

function waitfortime(seconds){
   return new Promise((resolve,reject)=>{
 if(seconds){
    setTimeout(() => {    
        resolve(); 
    },seconds);
}
else
reject("Got wrong time input");
})
}

grown();