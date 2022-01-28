"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var http = require('http');
const server = _http.default.createServer((req, res) => {
  res.end('Hello from the server');
}).listen(4001);

console.log('Server is up and running by 8080 port');
// var http = require('http');
var _default = server;
exports.default = _default;