
// var http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(4001);

console.log('Server is up and running by 8080 port');

import http from 'http';
// var http = require('http');
export default server;

console.log("Hii from index");