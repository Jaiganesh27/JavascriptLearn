

console.log("super class using inheritance");



class Pen{
   static constructor(){
      this.refillfull = () =>{
            console.log("pen has been refilled!!");
        }
    }
     refillempty = () =>
    {
        console.log("pen has not been refilled!!");
    }

    static refillhalf = () =>{
        console.log("pen has been refilled half");
    }
}

class Box extends Pen{
    constructor(pencil,eraser){
        super();
     this.pencil = pencil;
     this.eraser = eraser;
     this.isrefillFilled =() =>{
       this.refillfull();
       console.log(`The Pencil is ${this.pencil} and the eraser is ${this.eraser}`);
     }
    }
}

let box1 = new Box('apsara','natraj');
console.log(box1);
// box1.isrefillFilled();
// box1.refillempty();



// static methods

// box1.refillhalf();
// Box.refillhalf();
Pen.refillhalf();
