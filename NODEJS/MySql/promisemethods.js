//promise methods


var promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject('resolve promise one');
    },1000)
})
var promiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('resolving promise two ');
    },400)
})
var promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('resolve promise three');
    },300)
})
// Promise methods
Promise.all([promiseOne,promiseThree,promiseTwo]).then(r=>console.log('resolve',r))
.catch(error=> console.log('erro',error));
// Promise.allSettled([promiseOne,promiseThree,promiseTwo]).then(r=>console.log('resolve',r));
// Promise.race([promiseOne,promiseThree,promiseTwo]).then(r=>console.log('resolve',r))
// .catch(error=> console.log('erro',error));