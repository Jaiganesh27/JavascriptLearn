//hoisting

var a = 10;
user();
function user() {
  console.log('a:', a);
  let userName;
  userName = 'ramesh';
  console.log('expe type', typeof expe);
  // expe();
  var expe = function () {
    console.log('hii ' + userName);
  };
  expe();
}
