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

class SuperMarket {
    constructor(vegetables, fruits) {
        this.vegetables = vegetables;
        this.fruits = fruits;
    }
    BulkOrder() {
        console.log("I have Recieved you order Will send soon!");
    }
    superOrder(){
        console.log(" i am super");
    }
}

SuperMarket.prototype.BulkOrder = function (){
    console.log("I have Recieved you order Will send soon!");
    }
SuperMarket.prototype.superOrder = function(){
    console.log("hii i am super order");
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
 class Student extends Office{
     constructor(){
         super();
     }
    studentEnroll = () =>{
        console.log("Hii jaiganesh you have been enrolled!!");
      this.officemeetend();   
    } 
 }

 let student = new Student();
 student.time = '12am';
 student.team = 'mobileteam';
 console.log(student);
 student.studentEnroll();
 

        console.log(SuperMarket.prototype);




//functional inheritance
var mammal = function(spec) {

    var that = {};

    that.get_name = function() {

        return spec.name;

    };

    that.says = function() {
        return spec.saying || '';
    };

    return that;
}

var cat = function(spec) {

    spec.saying = spec.saying || 'meow';
    var that = mammal(spec);
    that.purr = function(n) {

        var i, s = '';

        for (i = 0; i < n; i++) {

            if (s) {
                s += '-';
            }
            s += 'r';
        }

        return s;
    };
    that.get_name = function() {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    };
    return that;

}

var myMammal = mammal({name: 'Herb'});
var myCat = cat({name: 'Fiona'});
    myCat.get_name(); // "meow Fiona meow"
    myCat.purr(5); // "r-r-r-r-r" 


//psuedoclassical inheritance is also same as  