import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './index.css';
import App from './App';
import ConditionRender from './components/ConditionRender';
import UserLogInOut from './components/UserLogInOut';
import Page from './components/Warning';


import Blog from './components/ListKeys';
import Forms from './components/Forms';
import axios from 'axios';
import RegisterForm from './components/RegisterForm';

axios.defaults.baseURL = 'http://localhost:8081/api/user/';

// import reportWebVitals from './reportWebVitals';
// import sample from './sample.json';
// import Car from './components/Car';
// import CarClass from './components/CarClass';
// let sampleJson = [];
// sampleJson = sample.map(ele => {
//   return JSON.parse(ele.checkoutJson);
// })
// console.log(sampleJson);

// let temp = [];
// let finalData = [];

// sampleJson.forEach(ele => {
//   let funCard = {
//     quantity: null,
//     playerCount: null,
//     gravityPlayCount: null,
//     gameQuantity: null
//   };
//   if (ele && ele.newFunCard && ele.newFunCard.length !== 0) {
//     temp = ele.newFunCard.map(fun => {
//       if (fun && fun.quantity)
//         return fun.quantity;
//     })
//     funCard.quantity = temp.reduce(((pre, cur) => pre + cur), 0);
//   }
//   if (ele && ele.laserTag && ele.laserTag.length !== 0) {
//     temp = ele.laserTag.map(fun => {
//       if (fun && fun.playerCount)
//         return fun.playerCount;
//     })
//     funCard.playerCount = temp.reduce((pre, cur) => pre + cur);
//   }
//   if (ele && ele.gravityRope && ele.gravityRope.length !== 0) {
//     temp = ele.gravityRope.map(fun => {
//       if (fun && fun.player)
//         return fun.player;
//     })
//     funCard.gravityPlayCount = temp.reduce((pre, cur) => pre + cur);
//   }
//   if (ele && ele.birdly && ele.birdly.length !== 0) {
//     temp = ele.birdly.map(fun => {
//       if (fun && fun.gameQuantity)
//         return fun.gameQuantity;
//     })
//     funCard.gameQuantity = temp.reduce((pre, cur) => pre + cur);
//   }
//   finalData.push(funCard);
// })


// const element = (
//   <div>
//     {
//       finalData && finalData.map(ele => {
//         return (
//           <div>
//             FunCard Quantity X {ele.quantity ? ele.quantity : 0}
//             LaserTag PlayerCount X {ele.playerCount ? ele.playerCount : 0}
//             GravityRope Player X {ele.gravityPlayCount ? ele.gravityPlayCount : 0}
//             Birdly GameQuantity X {ele.gameQuantity ? ele.gameQuantity : 0}
//             <br></br><hr></hr>
//           </div>
//         )
//       })
//     }
//     <br></br><hr></hr>
//     <br></br><hr></hr>
//     <Car />
//     <br></br><hr></hr>
//     <br></br><hr></hr>
//     <CarClass />
//   </div>
//)
let userData = [];
let  getUserList = async () =>{
  try{  
  let result = await axios.get('/list');
  let userData =await result.data;
  console.log(userData); 
  ReactDOM.render(
    // <Blog userData = {userData}/>, document.getElementById('root')
    // <Forms value ={val}/>, document.getElementById('root')
    <RegisterForm />, document.getElementById('root')
  )
  return userData; 
  }
  catch(err){
    console.log("err",err);
  }           
  }
  getUserList();
  

  console.log(userData);        

