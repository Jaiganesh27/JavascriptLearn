// 1) Array reverse
myarr = [1,2,3,4,5,6,7,8,9]
myarr.reverse();
myarr.reverse(1,2);
console.log(myarr);

// 2) how sort works in number array
sortarray = [1,5777,4,10000,7,9,3,6,10,34,86,24,86];
console.log(sortarray);

let temp = 0;
for (let i = 0; i < sortarray.length; i++) {     
    for (let j = i+1; j < sortarray.length; j++) {     
       if(sortarray[i] > sortarray[j]) {    
           temp = sortarray[i];    
           sortarray[i] = sortarray[j];    
           sortarray[j] = temp;    
       }     
    }     
}    

  console.log("aftersort",sortarray);
 

// javascript sort method
jssort = [1,'2','8','1','5','6','g','8'];

// jssort.sort();
console.log(jssort);
//compare function
 let newarray ;
 newarray = jssort.sort((a,b) =>{
     console.log("con",a,b);
      a - b;
      console.log(newarray);
 })

 console.log(jssort)
 console.log(newarray)






// prototype
// oops
// classes
// regular expressions
// json