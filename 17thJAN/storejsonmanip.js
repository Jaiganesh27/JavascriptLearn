store = {
    "food":{
       "vegCatagory":{
          "vegetables":[
            
          ],
          "fruits":[
             
          ]
       },
       "nonVegCatagory":{
          "ground":[
             
          ],
          "sea":[
             
          ]
       },
       "groceries":{
          "kitchen":[
             
          ]
       }
    },
    "fancy":{
       "dress":{
          "menDress":[
              
             
          ],
          "womenDress":[
            
          ]
       },
       "cosmetics":{
          "perfumes":[
            
          ],
          "womens":[

          ]
       }
    }
 }


// get ,create, update, delete. 
console.log(store);
// it will be a template for adding and updating products . 
function LoadProduct(proid,proname,proprice,quantity){
let tempObj = {
    productId:null,
    productName:null,
    productPrice:null,
    quantity:null
}
tempObj.productId = proid;
tempObj.productName = proname;
tempObj.productPrice = proprice;
tempObj.quantity = quantity;
return tempObj;
}



function addProduct(productid,productname,productprice,quantity,cattype,catagory,innercat){
  let temp  =  LoadProduct(productid,productname,productprice,quantity);
  if(cattype == 'food'){
  if(catagory == "vegCatagory") { 
          if(innercat == "vegetables")
          store.food.vegCatagory.vegetables.push(temp);
          else
          store.food.vegCatagory.fruits.push(temp);
  }
  else if(catagory == "nonVegCatagory"){
  if(innercat == "ground")
          store.food.nonVegCatagory.ground.push(temp);
          else
          store.food.nonVegCatagory.sea.push(temp);
  }
  else{
    store.food.groceries.kitchen.push(temp);
  }
  }
  else if(cattype == 'fancy'){
  if(catagory == "dress") { 
    if(innercat == "menDress")
    store.fancy.dress.menDress.push(temp);
    else
    store.fancy.dress.womenDress.push(temp);
}
else if(catagory == "cosmetics"){
if(innercat == "perfumes")
    store.fancy.cosmetics.perfumes.push(temp);
    else
    store.fancy.cosmetics.womens.push(temp);
}
else{
console.log("You have Entered wrong input!");
}
}
}

addProduct('0001','Carrot',25,10,'food','vegCatagory','vegetables');
addProduct('0002','Beans',20,10,'food','vegCatagory','vegetables');
addProduct('0003','Tomato',40,10,'food','vegCatagory','vegetables');
addProduct('0004','Chilli',55,10,'food','vegCatagory','vegetables');
addProduct('0005','Potato',70,10,'food','vegCatagory','vegetables');
addProduct('0006','Mutton',400,10,'food','nonVegCatagory','ground');
addProduct('0007','Chicken',200,10,'food','nonVegCatagory','ground');
addProduct('0008','Fish',300,10,'food','nonVegCatagory','sea');
addProduct('0009','Pineapple',60,10,'food','vegCatagory','fruits');
addProduct('0010','Banana',60,10,'food','vegCatagory','fruits');
addProduct('0011','Orange',30,10,'food','vegCatagory','fruits');
addProduct('0012','Sugar',67,5,'food'); //this will go to kitchen in groceries
addProduct('00100','Shirt',400,10,'fancy','dress','menDress');
addProduct('00101','Pant',700,10,'fancy','dress','menDress');
addProduct('00102','T-Shirt',150,10,'fancy','dress','menDress');
addProduct('00103','Chudi',700,20,'fancy','dress','womenDress');
addProduct('00104','Saree',600,30,'fancy','dress','womenDress');
addProduct('00105','Fogg',200,15,'fancy','cosmetics','perfumes');
addProduct('00106','bangles',30,40,'fancy','cosmetics','womens');
addProduct('00107','nailpolish',20,10,'fancy','cosmetics','womens');


// add to cart
console.log(store);

function updateOrAssignDefault(element,reName,rePrice,reQuantity){
    element.productName = reName?reName:element.productName;
    element.productPrice = rePrice?rePrice:element.productPrice;
    element.quantity = reQuantity?reQuantity:element.quantity;
}

function updateOrDeleteProduct(action,productID,type,catagory,subcat,reName,rePrice,reQuantity,quan){
    // console.log(catagory);
    CartData = [];
  if(type == 'food')
{

    if(catagory == 'vegCatagory')
    { 
        if(subcat == 'vegetables'){   
            store.food.vegCatagory.vegetables.forEach((element,index)=>{
              if(element.productId == productID){
                  if(action == 'DELETE')
                  store.food.vegCatagory.vegetables.splice(index,1);
                  else if(action == 'BUY'){
                      if(element.productQuantity - quan > 0){
                    CartData = product(element.productName,element.productPrice,element.quantity);
                    element.productQuantity = element.productQuantity - quan;
                    return CartData;
                      }
                      else
                       console.log("Product is Empty Or not Enough!!!!");
                  }  
                  else
                  {
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  }  
            }
            })
        }
        else if(subcat == 'fruits'){   
            store.food.vegCatagory.fruits.forEach((element)=>{
            if(element.productId == productID){
                if(action == 'DELETE')
                store.food.vegCatagory.fruits.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  }    
        }
         })
        }
        else 
        {
            console.log("catagory not found!");
        }  
    } 
else if(catagory == 'nonVegCatagory')   
    {
        if(subcat == 'ground'){   
            store.food.nonVegCatagory.ground.forEach((element)=>{
               
                  
              if(element.productId == productID){
                if(action == 'DELETE')
                store.food.nonVegCatagory.ground.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
            }
            })
        }
        else if(subcat == 'sea'){   
            store.food.nonVegCatagory.sea.forEach((element)=>{
            if(element.productId == productID){
                if(action == 'DELETE')
                store.food.nonVegCatagory.sea.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
        }
         })
        } 
        else 
        {
            console.log("catagory not found!");
        } 

    }
    else{
        store.food.groceries.kitchen.forEach((element)=>{
            if(element.productId == productID){
                if(action == 'DELETE')
                store.food.groceries.kitchen.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
        }
         })
    }
}
else if(type == 'fancy'){
    if(catagory == 'dress')
    { 
        if(subcat == 'menDress'){   
            store.fancy.dress.mendress.forEach((element)=>{
              if(element.productId == productID){
                  if(action == 'DELETE')
              store.fancy.dress.mendress.splice(index,1);
              else{
                updateOrAssignDefault(element,reName,rePrice,reQuantity);
              } 
            }
            })
        }
        else if(subcat == 'womenDress'){   
            store.fancy.dress.womenDress.forEach((element)=>{
            if(element.productId == productID){
                if(action == 'DELETE')
                store.fancy.dress.womenDress.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
        }
         })
        }  
    } 
    else if(catagory == 'cosmetics')   
    {
        if(subcat == 'perfumes'){   
            store.fancy.cosmetics.perfumes.forEach((element)=>{
              if(element.productId == productID){
                if(action == 'DELETE')
                store.fancy.cosmetics.perfumes.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
            }
            })
        }
        else if(subcat == 'sea'){   
            store.fancy.cosmetics.womens.forEach((element)=>{
            if(element.productId == productID){
                if(action == 'DELETE')
                store.fancy.cosmetics.womens.splice(index,1);
                else{
                    updateOrAssignDefault(element,reName,rePrice,reQuantity);
                  } 
        }
         })
        }  

    }
    else{
        console.log("we doesnt have this catagory!");
    }
}
else{
    console.log("We are not have this catagory field please chooose food/cosmetics only!");
}
}
// action & proid & protype & procat & prosubcat (optional was proname & proprice & proquantity) = params
updateOrDeleteProduct('UPDATE','0003',"food","vegCatagory","vegetables",'Onion','80',35);
updateOrDeleteProduct('DELETE','0004',"food","vegCatagory","vegetables");


// user buying 
console.log("Hii Jaiganesh");




function addItemToCart(action,productID,type,catagory,subcat,quantity){
      updateOrDeleteProduct(action,productID,type,catagory,subcat,'','','',quantity);       
}
addItemToCart('BUY','0004',"food","vegCatagory","vegetables",5);



function productAddtoCart(proname,proprice,proquan,total){
productList = {
     productName : null,
     productPrice :null,
     productQuantity:null,
     totalPrice:null
}
productList.totalPrice = element.quantity * element.productPrice;
productList.productName = proname;
productList.productPrice = proprice;
productList.productQuantity = proquan;
return productList;
}