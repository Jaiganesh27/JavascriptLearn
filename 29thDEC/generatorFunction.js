//generator functions

function* generatorFunc() {
  yield console.log('jai');
}
let gen = generatorFunc();
gen.next();
gen.next();
gen.next();

//generator function inside generator function
function* generatorCheck() {
  yield 'hii jaiganesh';
  yield* genNewFunc('jaiganesh');
}
function* genNewFunc(name) {
  console.log('Hii' + ' ' + name);
}
let gencheck = generatorCheck();
console.log(gencheck.next());
console.log(gencheck.next());

// we can pass value through params.
function* myGenerator() {
  console.log('Hey ', yield);
  console.log('Are you ', yield);
}

let myGen = myGenerator();
//   myGen.next();
myGen.next('Jaiganesh');
myGen.next('shiv');
  // myGen.next();
