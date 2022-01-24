// promise
// promise resolve,reject then catch finally
// promise.all,.allsettled,race 

// single promise
var a = new Promise((resolve,reject)=>{
    let val = fetch('https://fakestoreapi.com/products')
    console.log(val);
    if(val.status == 404)
    {console.log('hii');
    reject(val);}
     else
     resolve(val);
})
console.log('promise of',a.Promise);
a.then(res =>res.json()).then(json => console.log('json15',json));
a.catch(error=>console.log(error));
a.finally('i am always working');

// 
var b = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject('resolve promise one');
    },1000)
})
var c = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('resolve promise two');
    },400)
})
var d = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject('resolve promise three');
    },300)
})
// Promise methods
// Promise.all([b,c,d]).then(r=>console.log('resolve',r))
// .catch(error=> console.log('erro',error));
// Promise.allSettled([b,c,d]).then(r=>console.log('resolve',r));
Promise.race([b,c,d]).then(r=>console.log('resolve',r))
.catch(error=> console.log('erro',error));

// Promise

        //     async and await
            console.log('jaiganesh');
         async  function asyn(){
          let response = await fetch('https://fakestoreapi.com/products')
          console.log('responseline52',response.status);
          let result =  await response.json();
           console.log('inside',result);
           return result;
           
        }
        // promise checking after the async await function
         let val =  asyn();
          console.log('hii58line',val.then(c=>console.log('c58',c)));
