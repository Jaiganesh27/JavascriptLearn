const object = { name: 'key', value: 'value', pair: 'pair' };
const arrays = ['jai',21,'chennai'];
const str = 'StringValue';
// for (const property of object) {
//   console.log(property);
// }
for (const property of arrays) {
    console.log(property);
  }

for(let value of str){
  console.log(value);
}
// generator function
function* generatorFunc() {
  
  yield 10;
  yield 'google';
  yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
  console.log(value);
}
