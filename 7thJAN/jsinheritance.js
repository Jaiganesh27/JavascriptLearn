// console.log("inheritance");
function Office(team,time){
    this.team = team;
    this.time = time;
    // this.officestandupmet = () =>{
    //     console.log(`Hii ${team}, Everyone should join at ${time} Sharp!`);
    // }
    // this.officestatusmet = (team,time) =>{
    //     console.log(`Hii ${team}, Everyone should join at ${time} for status call`);
    // }
}
let mobileTL = new Office('Mobile Team','10 am');
let webTL = new Office();
let BackendTL = new Office();


Office.prototype.officestandupmet = function () {
    console.log(`Hii ${this.team}, Everyone should join at ${this.time} Sharp!`);
} 
Office.prototype.officestatusmet = function () {
    console.log(`Hii ${this.team}, Everyone should join at ${this.time} Sharp!`);
} 
    
mobileTL.officestatusmet('Mobile Team','10 am');
console.log(mobileTL,webTL,BackendTL);

let javaTL = new Office();
console.log(javaTL);


mobileTL.officestatusmet();
console.log(mobileTL);

let dataTL = Object.create();
console.log(dataTL);
