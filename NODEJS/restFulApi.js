/*
web service  - connection between  different application or device  over network 
format  - language
protocol - rule
lan/internet - medium

soap -  uses xml format ws security
rest -  uses xml ,json etc. light weight 

xml - tags used , big size(lines) no datatypes
json - uses object ,array , small in size(lines) , used datatypes.
*/



/*


server:
    interaction between client and database through the internet medium.
    it may have many clients to access 
   
   api - application programming interface 
   interaction between client and server request and response using http methods
*/




/*restful api

rest - representational state tranfer
rest is architechtural style it is not rule but if we use it will be restful 
it has 6 constranits 
1) uniform interface - get method for all get purposes
2) client server - no connection between client and server
3) statelessness - no history or previous login maintain or store in server
4) cacheable  - it should be cacheable when user come next time easier to access server
5) layered system - client should not know where the response from eg(ser A - api,ser B - db ser c- authentication
    if client call ser c--> server a will fetch data through ser c  and ser b)
6) code on demand(optional) --> static formats json /xml but as per request ,response should be render html page too.
if we achieve this our api will be restful api
*/





/*
   restapi methods:
  get -> method retrieve resource from resources using server - idempotent
  post  ->method create new resource to resources using server - non-idempotent
  put ->method update(entire) particular resource for a request - idempotent
  delete ->method will delete particular resource for a request - idempotent
  patch ->method will update(required) resources in the particular resource - idempotent 
*/


/*

status codes 
200 - ok(success or completed)
201 - created
202 - accepted (request has accepted res is in queue)
204 - perfromed(no content)(response doesn't have entity)
304  - not modified(like 200)
400 - bad request
401 - unauthorizes
403 - forbidden(unauthorized)
404 - not found
405 - method not allowed
500 - internal server error.

*/

/*
url uniform resource locator urn --> uniform resource name uri - uniform resource identifier
*/


/*
npm - node package manager 
npm init - create new package.json
npm manage dependencies
npm install  - nodemodules dependencies
npm install [package name] - intall particular package in node modules
^ - 4.14.45
   4 - major
   14 - minor - ^ minor and patch version upgrade
   45 - patch - ~ patch version upgrade
   * - will upgrade latest version 
   "4.14.45" - will install exact version

npm install -g express  - globally install in the system
npm i express - locally(existing folder and configure package.json)

package.json -  dependencies,name ,version,author,dev-dependencies,scripts etc.

package.lock-json - it will lock the specific version for the project

*/

/*
node  modules
 1) core modules - these modules has been extracted from node modules using require keyword
 2) local modules - these modules has been extracted from locally created modules 
 3) thirdparty modules - these modules has been extracted from third party using require keyword
 */


// import * from express;
// var express = require('express')

/* require - can call any place of the Program -common js
 automatically find node_modules
 but will not we need to specify to import for the path of the module

 for require we can specify all over the file but for import keyword 
 we should  import it all from top of the page.

 */
// import - can only called from top of the page  -es6



/*
export default
*/



// node js server side javascript runtime environment
// node js is single threaded and it has  evenet looping  concepts to 
// leads it makes a asynchronous programming.



// synchronous and asynchrounous
// synchronous - server handles one request at a time . and it will take another
// until it finishes it before received request.
// asynchronous - node with asynchrounous and single threaded it firstly took the request an 
// send it to the api before it finishes it will take another request and put it into the 
// event looping when the first one respose arrives it took the response from server 
// and send it back to the requested client.

// sync = php 
// async = node

// console.log("hii1")
// setTimeout(()=>{
//    console.log("hii3");
// },5000)
// console.log("hii2")


// express 
//  1)  express do all the things node have and also will run
//  top of the node it is framework and have extra feautres to easy the node and api works.

/*
dist/: used for the compiled code.
assets/: static content like images, video, audio, fonts etc.
lib/: external dependencies (when included directly).
test/: the project's tests scripts, mocks, etc.
node_modules/: includes libraries and dependencies for JS packages, used by Npm.
bin/: files that get added to your PATH when installed.
*/ 


