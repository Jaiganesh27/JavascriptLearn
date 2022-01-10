// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes/
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    },
    get lang() {
        return this.language.toUpperCase();
      }
  };
  person.lang = "ene";

  console.log(person.language);


  const object1 = {};

  Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,
  
  });
  
  object1.property1 = 77;
  // throws an error in strict mode
  
  console.log(object1.property1);
  // expected output: 42
  