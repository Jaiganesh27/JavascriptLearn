/*
web service  - connection between  different application or device  over network 
format  - language
protocol - rule
lan/internet - medium

soap -  uses xml format  - high bandwidth 
rest -  uses xml ,json etc.  - low badwidth

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


  idempotent - if we call api mutiple times it should not affect resource each time.
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