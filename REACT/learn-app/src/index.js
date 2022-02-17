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
let sampleJson = [];
sampleJson = sample.map(ele => {
  return JSON.parse(ele.checkoutJson);
})
console.log(sampleJson);

let temp = [];
let finalData = [];

sampleJson.forEach(ele => {
  let funCard = {
    quantity: null,
    playerCount: null,
    gravityPlayCount: null,
    gameQuantity: null
  };
  if (ele && ele.newFunCard && ele.newFunCard.length !== 0) {
    temp = ele.newFunCard.map(fun => {
      if (fun && fun.quantity)
        return fun.quantity;
    })
    funCard.quantity = temp.reduce((pre, cur) => pre + cur);
  }
  if (ele && ele.laserTag && ele.laserTag.length !== 0) {
    temp = ele.laserTag.map(fun => {
      if (fun && fun.playerCount)
        return fun.playerCount;
    })
    funCard.playerCount = temp.reduce((pre, cur) => pre + cur);
  }
  if (ele && ele.gravityRope && ele.gravityRope.length !== 0) {
    temp = ele.gravityRope.map(fun => {
      if (fun && fun.player)
        return fun.player;
    })
    funCard.gravityPlayCount = temp.reduce((pre, cur) => pre + cur);
  }
  if (ele && ele.birdly && ele.birdly.length !== 0) {
    temp = ele.birdly.map(fun => {
      if (fun && fun.gameQuantity)
        return fun.gameQuantity;
    })
    funCard.gameQuantity = temp.reduce((pre, cur) => pre + cur);
  }
  finalData.push(funCard);
})


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

    {
      finalData && finalData.map(ele => {
        return (
          <div>
            FunCard Quantity X {ele.quantity ? ele.quantity : 0}
            LaserTag PlayerCount X {ele.playerCount ? ele.playerCount : 0}
            GravityRope Player X {ele.gravityPlayCount ? ele.gravityPlayCount : 0}
            Birdly GameQuantity X {ele.gameQuantity ? ele.gameQuantity : 0}
            <br></br><hr></hr>
          </div>
        )
      })
    }
  </div>
)
ReactDOM.render(
  element, document.getElementById('root')
)
