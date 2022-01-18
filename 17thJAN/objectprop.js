// ObjectProperties
obj ={
    userName:'jaiganesh',
    userEmail:'jai@gmail.com',
    userMobile:8072678841
}

// using for each loop
Object.entries(obj).forEach((ele)=>{
    console.log(ele);
})
Object.keys(obj).forEach((ele)=>{
    console.log(ele);
})

Object.values(obj).forEach((ele)=>{
    console.log(ele);
})


// for in loop

for(let val of Object.values(obj))
console.log(val);