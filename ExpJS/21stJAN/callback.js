// callback function 

// function needFood(){
//     console.log("custo: I need a Food!");
// }
// function prepareFood(){
//     console.log("chef: got your order ");
//     // food take time so time interval put this place
//     setTimeout(()=>{
//         console.log("chef: Your Food has been prepared!");
//     },5000)
// }
// function finishFood(){
//     console.log("custo: Got it Thanks!");
// }

// needFood();
// prepareFood();
// finishFood();

// 
function needFood(){
        console.log("custo: I need a Food!");
    }
    function prepareFood(callback){
        console.log("chef: got your order ");
        // food take time so time interval put this place
        setTimeout(()=>{
            console.log("chef: Your Food has been prepared!");
            callback();
        },5000,function (){console.log("chef :food process in progress");})
    }

    function finishFood(){
        console.log("custo: Got it Thanks!");
    }


    needFood();
    prepareFood(finishFood);

    