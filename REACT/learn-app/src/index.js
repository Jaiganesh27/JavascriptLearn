import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import sample from './sample.json';
/*
 let condition1Check = 3;
 let condition2Check = 5;
function test(){
 let conditionRenderElement = null;
 if(condition1Check==1)
  conditionRenderElement = <span>Condtion 1</span>
  else if(condition2Check==2)
  conditionRenderElement = <span>Condition 2</span>
  else{
   conditionRenderElement = <span>Condition {conditionRenderElement}</span>
  }
  */
let newFunCard = [];
let laserTag = [];
let gravity = [];
let birdly = [];

let sampleJson = [];

// console.log(sample);
//json parsing from string to json format
sampleJson = sample.map(ele => {
  return JSON.parse(ele.checkoutJson);
})
console.log(sampleJson);

let temp = [];
let finalData = [];
let funCard = {quantity :null};
sampleJson.forEach(ele => {
  if (ele && ele.newFunCard  &&  ele.newFunCard.length != 0) {
    temp = ele.newFunCard.map(fun => {
      if (fun && fun.quantity) {
          return fun.quantity;
      }
      console.log("temp",temp);
     funCard.quantity = temp.reduce((pre,cur)=>{
         return pre + cur;
      })

        })
  }
  })

console.log(temp, funCard.quantity);
// separating arrays
// newFunCard = sampleJson.map(ele => {
//   return ele.newFunCard;
// })
// laserTag = sampleJson.map(ele => {
//   return ele.laserTag;
// })
// gravity = sampleJson.map(ele => {
//   return ele.gravityRope;
// })
// birdly = sampleJson.map(ele => {
//   return ele.birdly;
// })

let masterQuantity = 0;
let masterPlayerCount = 0;
let masterPlayer = 0;
let masterGameQuantity = 0;


//newFunCardQuantity
// newFunCard.forEach(ele => {
//   if (ele && ele.length !== 0) {
//     ele.forEach(quan => {
//       if (quan && quan.quantity) {
//               masterQuantity += quan.quantity;
//       }
//     })
//   }
// })
// console.log(masterQuantity, 'masterQuantity');

// //newFunCardQuantity
// laserTag.forEach(ele => {
//   if (ele && ele.length !== 0) {
//     ele.forEach(quan => {
//       if (quan && quan.playerCount) {
//         masterPlayerCount += quan.playerCount;
//       }
//     })
//   }
// })
// console.log(masterPlayerCount, 'masterPlayerCount');



// //masterPlayer
// gravity.forEach(ele => {
//   if (ele && ele.length !== 0) {
//     ele.forEach(quan => {
//       if (quan && quan.player) {
//               masterPlayer += quan.player;
//       }
//     })
//   }
// })
// console.log(masterPlayer, 'masterPlayer');


//gameQuantity
// birdly.forEach(ele => {
//   if (ele && ele.length !== 0) {
//     ele.forEach(quan => {
//       if (quan && quan.gameQuantity) {
//         masterGameQuantity += quan.gameQuantity;
//       }
//     })
//   }
// })
// console.log(masterGameQuantity, 'masterGameQuantity');


const element = (
  <div>
    {/*
     <h4>
       Its Time Now {new Date().toLocaleString()}
     </h4>Conditional rendering
     {condition1Check === 1?<span>Condition 1</span> :condition2Check==2?<span>Condition 2</span>:
     <span>Condition {condition2Check}</span>}

      {this.conditionRenderElement}
      */}

    <h1>FuncardQuantity = {masterQuantity}</h1>
    <h1>LaserTagPlayerCount = {masterPlayerCount}</h1>
    <h1>GravityPlayerCount = {masterPlayer}</h1>
    <h1>BirdlyGameQuantity = {masterGameQuantity}</h1>
  </div>
)
ReactDOM.render(
  element, document.getElementById('root')
)
