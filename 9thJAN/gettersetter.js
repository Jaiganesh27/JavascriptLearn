var myCar = {
    /* Data properties */
    defColor: "blue", 
    defMake: "Toyota",
    
    /* Accessor properties (getters) */
    get color() { 
         return this.defColor; 
    }, 
    get make() { 
         return this.defMake; 
    },
    
    /* Accessor properties (setters) */
    set color(newColor) {
	this.defColor = newColor;
    },
    set make(newMake) {
	this.defMake = newMake;
    }
};

/* Calling the setter accessor properties */
myCar.color = "red";
myCar.make = "Audi";

/* Checking the new values with the getter accessor properties */
myCar.color;
// red

myCar.make;
// Audi

console.log(myCar.make);

console.log(myCar);