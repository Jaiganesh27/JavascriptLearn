employeeJson =  {
   "employees":{
       "employee":[
          {
             "empId":"0001",
             "name":"",
             "age":"",
             "mobile":"",
             "email":"",
             "addresses":[
                {
                   "doorNo":"",
                   "street":"",
                   "city":"",
                   "landMark":"",
                   "state":"",
                   "country":"",
                   "pinCode":""
                }
             ],
             "department":{
                "semesters":{
                   "semester1":{
                      "cPrograming":"",
                      "operatingSystem":"",
                      "englishPaper1":"",
                      "tamilPaper1":""
                   },
                   "semester2":{
                      "c++Programing":"",
                      "DBMS":"",
                      "englishPaper2":"",
                      "tamilPaper2":""
                   },
                   "semester3":{
                      "javaPrograming":"",
                      "dataStructures":"",
                      "englishPaper3":"",
                      "tamilPaper3":""
                   },
                   "semester4":{
                      "c++Programing":"",
                      "DBMS":"",
                      "englishPaper4":"",
                      "tamilPaper4":""
                   },
                   "semester5":{
                      "javaScript":"",
                      "php":"",
                      "englishPaper5":"",
                      "tamilPaper5":""
                   },
                   "semester6":{
                      "Node":"",
                      "cryptography":"",
                      "englishPaper6":"",
                      "tamilPaper6":""
                   }
                }
             }
          }
       ]
    }
 }

 console.log(employeeJson.employees.employee[0].addresses);

 jsonobject = JSON.stringify(employeeJson);
 console.log(jsonobject);
 let parseval = JSON.parse(jsonobject);
 console.log(parseval.employees.employee[0].department.semesters);
 
 parseval.employees.employee[0].name ="jaiganehs";
 console.log(parseval.employees.employee);