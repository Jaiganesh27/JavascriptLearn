class TheaterAdmin{
    constructor(){
       console.log("I am constructor");   
    }
  static openTickts = () =>
  {
      console.log("Tickets is open now!!");
  }
   

}
class TheaterCounter extends TheaterAdmin{
    constructor(uname,date,time){
        super();
      this.date = date;
      this.time = time;
      this.uname = uname;
    }
     static bookTickets  = function (uname,date,time) {
        console.log(`Hi ${uname} You have Booked tickets in ${date} at ${time}`);
    } 

    requestTickets = function() {
        console.log("Plese I need Movie Tickets!");   
    }
   static verifyRequest = function(uname,date,time) {
       console.log("We are Verifying your process pls wait!");
       setTimeout(() => {
           this.bookTickets(uname,date,time);
       }, 5000);
    // this.bookTickets();

    }
}


let obj1 = new TheaterCounter('Ramu','8/1/2022','12.18am'); 

console.log(obj1);
obj1.requestTickets();
// booktickets 

// TheaterCounter.bookTickets();
TheaterCounter.verifyRequest('Ramu','8/1/2022','12.18am');
