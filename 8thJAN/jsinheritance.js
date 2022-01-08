// console.log("inheritance");
class Office{
    constructor(team,time){
    this.team = team;
    this.time = time;
}
 officestandupmet = function(){
    console.log(`Hii ${this.team}, Everyone should join at ${this.time} Sharp!`);
}
officestatusmet = function(){
    console.log(`Hii ${this.team}, Everyone should join at ${this.time} for status call`);
}
officemeetend = function(){
    console.log(`Meting has been ended`);
}
}
class Staff extends Office{
    constructor(team,time){
        super();
        this.team = team;
        this.time = time; 
    }
    arrangeMeeting = function(){
        this.officestandupmet();
    }
}

let staff1 = new Staff('Web Team','10am');
console.log(staff1);

staff1.arrangeMeeting();

class EndMeet extends Staff{
    constructor(){
        super();
    }
}

let endmeet1 = new EndMeet();
endmeet1.officemeetend();


// prototypical inheritance

function  SuperMarket(vegetables,fruits){
    this.vegetables = vegetables;
    this.fruits = fruits;
}
SuperMarket.prototype.BulkOrder = function (){
    console.log("I have Recieved you order Will send soon!");
    }
function Hotel(){
 this.needVegFruits =()=>{
     this.BulkOrder();
 }
 this.receiveFoodOrder = () =>{
     console.log("We are Received your food ordrr pls wait in queue");
 }
 }
 console.log("hii",Hotel.prototype);
 Hotel.prototype = Object.create(SuperMarket.prototype);
 console.log(Hotel.prototype);
 let eater = new Hotel();
 eater.receiveFoodOrder();
 eater.BulkOrder();
 console.log(eater);