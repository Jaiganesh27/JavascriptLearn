// // creating iterable object
// const iterableObj = {

//     // iterator method
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false};
//                  }
//                 else if (step === 2) {
//                     return { value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false};
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }

// // iterating using for...of
// for (const i of iterableObj) {
//  console.log(i);
// }
const number ='sdfsf';
let value;
for (let n of  number) {
    console.log(n);
    value+=n;
}
console.log(value);


