var express  = require('express')
var app = express()
var fetch = require('cross-fetch');
const { get } = require('./hAnimals');
const { response } = require('express');


// async and await

// getvalues();

//  function getvalues(){
//     let response;
//     console.log('response',response);
//        response = fetch('https://fakestoreapi.com/products/1');
//        console.log(response);
//     let value =  response.json();
//        console.log('valueconsole',value);
// }
// getvalues();


app.get('/',async function getvalues(req,res){
    let response;
    console.log('response',response);
       response = await fetch('https://fakestoreapi.com/products/1');
       console.log('response',response);
    let value = await response.json();
       console.log('valueconsole',value);
       res.send(value);
})


app.listen(3001,()=>{
  console.log('Connected');
});