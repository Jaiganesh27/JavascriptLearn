employeeJson =  {
   "employees":{
       "employee":[
          {
             "empId":"0001",
             "name":"Tom",
             "age":15,
             "mobile":96969696969,
             "email":"tom@gmail.com",
             "addresses":[
                {
                   "doorNo":1,
                   "street":"cat street",
                   "city":"mark henry street",
                   "landMark":"kabilan street opp",
                   "state":"texas",
                   "country":"us",
                   "pinCode":600050
                }
             ],
             "department":{
                "semesters":{
                   "semester1":{
                      "cPrograming":70,
                      "operatingSystem":55,
                      "englishPaper1":43,
                      "tamilPaper1":90
                   },
                   "semester2":{
                      "cppPrograming":94,
                      "DBMS":55,
                      "englishPaper2":78,
                      "tamilPaper2":89
                   },
                   "semester3":{
                      "javaPrograming":100,
                      "dataStructures":65,
                      "englishPaper3":49,
                      "tamilPaper3":62
                   },
                   "semester4":{
                      "MYSQL":67,
                      "DBMS":98,
                      "englishPaper4":32,
                      "tamilPaper4":90
                   },
                   "semester5":{
                      "javaScript":35,
                      "php":71,
                      "englishPaper5":15,
                      "tamilPaper5":69
                   },
                   "semester6":{
                      "Node":79,
                      "cryptography":89,
                      "englishPaper6":84,
                      "tamilPaper6":60
                   }
                }
             }
          },
          
          {
            "empId":"0002",
            "name":"Jerry",
            "age":14,
            "mobile":96969696977,
            "email":"jerry@gmail.com",
            "addresses":[
               {
                  "doorNo":2,
                  "street":"rat street",
                  "city":"brock city",
                  "landMark":"suresh street opp",
                  "state":"california",
                  "country":"us",
                  "pinCode":600051
               }
            ],
            "department":{
               "semesters":{
                  "semester1":{
                     "cPrograming":66,
                     "operatingSystem":56,
                     "englishPaper1":34,
                     "tamilPaper1":87
                  },
                  "semester2":{
                     "cppPrograming":98,
                     "DBMS":65,
                     "englishPaper2":34,
                     "tamilPaper2":86
                  },
                  "semester3":{
                     "javaPrograming":87,
                     "dataStructures":54,
                     "englishPaper3":100,
                     "tamilPaper3":87
                  },
                  "semester4":{
                     "MYSQL":87,
                     "DBMS":34,
                     "englishPaper4":65,
                     "tamilPaper4":98
                  },
                  "semester5":{
                     "javaScript":65,
                     "php":98,
                     "englishPaper5":34,
                     "tamilPaper5":76
                  },
                  "semester6":{
                     "Node":98,
                     "cryptography":84,
                     "englishPaper6":83,
                     "tamilPaper6":97
                  }
               }
            }
         },
         {
            "empId":"0003",
            "name":"Mickey",
            "age":18,
            "mobile":9765645455,
            "email":"mickey@gmail.com",
            "addresses":[
               {
                  "doorNo":2,
                  "street":"kannadhasan street",
                  "city":"trump city",
                  "landMark":"jeeva street opp",
                  "state":"wisconsin",
                  "country":"us",
                  "pinCode":600052
               }
            ],
            "department":{
               "semesters":{
                  "semester1":{
                     "cPrograming":34,
                     "operatingSystem":76,
                     "englishPaper1":97,
                     "tamilPaper1":34
                  },
                  "semester2":{
                     "cppPrograming":67,
                     "DBMS":87,
                     "englishPaper2":34,
                     "tamilPaper2":56
                  },
                  "semester3":{
                     "javaPrograming":26,
                     "dataStructures":65,
                     "englishPaper3":76,
                     "tamilPaper3":76
                  },
                  "semester4":{
                     "MYSQL":56,
                     "DBMS":86,
                     "englishPaper4":32,
                     "tamilPaper4":90
                  },
                  "semester5":{
                     "javaScript":35,
                     "php":71,
                     "englishPaper5":15,
                     "tamilPaper5":69
                  },
                  "semester6":{
                     "Node":79,
                     "cryptography":87,
                     "englishPaper6":45,
                     "tamilPaper6":87
                  }
               }
            }
         },
       ]
    }
 }
// modify josn into simple varibles
let EmployeeFullList  =  JSON.stringify(employeeJson)
console.table(EmployeeFullList);
EmployeeFullList = JSON.parse(EmployeeFullList)
let EmployeesDetailsList = EmployeeFullList.employees;
console.log(EmployeesDetailsList);

// list making for 3 employees
let TomList,JerryList,MickeyList;
for(let i=0;i<EmployeesDetailsList.employee.length;i++){
   if(i==0)
   TomList = EmployeesDetailsList.employee[i];
   else if(i==1)
   JerryList = EmployeesDetailsList.employee[i];
   else if(i==2)
   MickeyList = EmployeesDetailsList.employee[i];
   else
    console.log("Nothing will add!");
}
console.log(TomList);

// basic details printing  employees
for(let ele in  TomList)
console.log(`${ele} : ${TomList[ele]}`);
for(let ele in  JerryList)
console.log(`${ele} : ${JerryList[ele]}`);
for(let ele in  TomList)
console.log(`${ele} : ${MickeyList[ele]}`);

// access adress
let TomAddresses = TomList.addresses;
let JerryAddresses = JerryList.addresses;
let MickeyAddresses = MickeyList.addresses;
console.log(TomAddresses);

//address template
const addressTemplate = {
    doorNo:null,
    street:"",
    city:"",
    landMark:"",
    state:"",
    country:"",
    pinCode: null
} 
console.log(addressTemplate);
function addAddress(employee,door,street,city,landMark,state,country,pinCode){  
addressTemplate.doorNo = door;
addressTemplate.street = street;
addressTemplate.city = city;
addressTemplate.landMark = landMark;
addressTemplate.state = state;
addressTemplate.country = country;
addressTemplate.pinCode = pinCode;
switch(employee){
   case 1:
   TomAddresses.push(addressTemplate);
   break;
   case 2:
   JerryAddresses.push(addressTemplate);
   break;
   case 3:
   MickeyAddresses.push(addressTemplate);
   break;
   default:
   console.log("undefined found");
}
}
addAddress(1,'');