// diff between foreach and for loop
let arr = [1,2,3,4,,6,7,8,9];
console.log(arr);
console.log(arr[4]);
arr.forEach((e) => console.log(e + 10))

arr = [1,2,3,4,,6,7,8,9];
for(i=0;i<arr.length;i++){
    console.log(arr[i] + 10);
}
// arr = [1,2,3,4,,6,7,8,9];
// for(let val in arr){
//     if(val === 5)
//     console.log(arr[val] + 10);
// }
// arr = [1,2,3,4,,6,7,8,9];
// for(let val of arr){
//     console.log(val + 10);
// }

arr = ['mango','orange','pineapple','123','orange','potato','orange']
console.log(arr.lastIndexOf('orange',-4));
