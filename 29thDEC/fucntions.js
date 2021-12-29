//function declaration function expression
//
// value always has been set when file is run
// function add() {
//     console.log('function declaration or named functions');
//     return 'hii';
//   }
//   // add();
//   console.log(add());
  
  // we cannot use this functions execute itself.
  //self invoking function or iif
  // (function add(num) {
  //   console.log('iif function worked!!');
  //   console.log(num * num);
  //   console.log(5 * 5);
  // })(5);
  
  // Expression function
  // hoisted only variable name and values will not hoisted.
  // Function expressions are invoked to avoid polluting the global scope.
  //  Instead of your program being aware of many different functions,
  //  when you keep them anonymous, they are used and forgotten immediately.
  
  const expi = function () {
     console.log('method');
    console.log(expi.name);
  };
  expi();
  // console.log(expi());
  
  