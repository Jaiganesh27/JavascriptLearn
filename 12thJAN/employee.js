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
                "semesters":[
                   {
                      "cPrograming":70,
                      "operatingSystem":55,
                      "englishPaper1":43,
                      "tamilPaper1":90
                   },
                   {
                      "cppPrograming":94,
                      "DBMS":55,
                      "englishPaper2":78,
                      "tamilPaper2":89
                   },
                   {
                      "javaPrograming":100,
                      "dataStructures":65,
                      "englishPaper3":49,
                      "tamilPaper3":62
                   },
                   {
                      "MYSQL":67,
                      "DBMS":98,
                      "englishPaper4":32,
                      "tamilPaper4":90
                   },
                   {
                      "javaScript":35,
                      "php":71,
                      "englishPaper5":15,
                      "tamilPaper5":69
                   },
                   {
                      "Node":79,
                      "cryptography":89,
                      "englishPaper6":84,
                      "tamilPaper6":60
                   }
                  ]
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
               "semesters":[
                  {
                     "cPrograming":66,
                     "operatingSystem":56,
                     "englishPaper1":34,
                     "tamilPaper1":87
                  },
                  {
                     "cppPrograming":98,
                     "DBMS":65,
                     "englishPaper2":34,
                     "tamilPaper2":86
                  },
                  {
                     "javaPrograming":87,
                     "dataStructures":54,
                     "englishPaper3":100,
                     "tamilPaper3":87
                  },
                  {
                     "MYSQL":87,
                     "DBMS":34,
                     "englishPaper4":65,
                     "tamilPaper4":98
                  },
                  {
                     "javaScript":65,
                     "php":98,
                     "englishPaper5":34,
                     "tamilPaper5":76
                  },
                  {
                     "Node":98,
                     "cryptography":84,
                     "englishPaper6":83,
                     "tamilPaper6":97
                  }
               ]
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
               "semesters":[
                  {
                     "cPrograming":34,
                     "operatingSystem":76,
                     "englishPaper1":97,
                     "tamilPaper1":34
                  },
                  {
                     "cppPrograming":67,
                     "DBMS":87,
                     "englishPaper2":34,
                     "tamilPaper2":56
                  },
                  {
                     "javaPrograming":26,
                     "dataStructures":65,
                     "englishPaper3":76,
                     "tamilPaper3":76
                  },
                  {
                     "MYSQL":56,
                     "DBMS":86,
                     "englishPaper4":32,
                     "tamilPaper4":90
                  },
                  {
                     "javaScript":35,
                     "php":71,
                     "englishPaper5":15,
                     "tamilPaper5":69
                  },
                  {
                     "Node":79,
                     "cryptography":87,
                     "englishPaper6":45,
                     "tamilPaper6":87
                  }
               ]
            }
         },
       ]
    }
 }
// modify jsonn into simple varibles
let EmployeeFullList  =  JSON.stringify(employeeJson)
console.table(EmployeeFullList);
EmployeeFullList = JSON.parse(EmployeeFullList)
let EmployeesDetailsList = EmployeeFullList.employees;
console.log(EmployeesDetailsList);

// listarray making for 3 employees
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
    addressId:Number,
    doorNo:Number,
    street:String,
    city:String,
    landMark:String,
    state:String,
    country:String,
    pinCode: Number
} 
console.log(addressTemplate);

// new address adding
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
addAddress(1,5,'seetha street','chennai','govt schol opp','tamilnadu','india',600100);
console.log(TomAddresses);
TomAddresses.shift();
console.log(TomAddresses);

// access semester marks  employees
let tomSemester = [],jerrySemester = [],mickeySemester = [];
// console.log(TomList.department.semesters);
tomSemester = TomList.department.semesters;
jerrySemester = JerryList.department.semesters;
mickeySemester = MickeyList.department.semesters;
console.log(tomSemester);

// calculating each semester totals
let tomEachSemTotArr=[], jerryEachSemTotArr=[], mickeyEachSemTotArr=[];
function pushSemTotalInArray (arr){
   let temparr = [];
   arr.forEach((element) => {
      let temp = 0;
   for(let val in element)
       temp += element[val];
   
       temparr.push(temp);
});
  return temparr;
}
tomEachSemTotArr = pushSemTotalInArray(tomSemester);
jerryEachSemTotArr = pushSemTotalInArray(jerrySemester);
mickeyEachSemTotArr = pushSemTotalInArray(mickeySemester);
console.log(tomEachSemTotArr);
console.log(jerryEachSemTotArr);
console.log(mickeyEachSemTotArr);
// topper find for each semester
semesterMark = (arr1,arr2,arr3) =>{
      for(let mark in arr1)
      {
         if(arr1[mark] > arr2[mark] && arr3[mark])
            console.log(`Semester - ${++mark} Topper = Tom !!!`);
         else if(arr2[mark] > arr1[mark] && arr3[mark])   
         console.log(`Semester - ${++mark} Topper = Jerry !!!`);
         else
         console.log(`Semester - ${++mark} Topper = Mickey !!!`);
      }
}
semesterMark(tomEachSemTotArr,jerryEachSemTotArr,mickeyEachSemTotArr);
// overall highest mark of all semester
      
// console.log(tomEachSemTotArr);
// function tomBestSemTot(arr){
//    let temparr =[];
//    temparr = arr;
//    let val;
//    temparr.filter((a,b) =>{
//       if(a>b){
         
//       }
//   });
//   val = temparr.length-1;
//   console.log(tomEachSemTotArr,val);
// }
// tomBestSemTot(tempoArray);

// get complete marks (all addition of semester marks)
function getOverallScore(arr){
   let temp = arr.reduce((a,b) =>{
      return  a+b;
    });
    return temp;
}
let overallHigh = [];
overallHigh.push(getOverallScore(tomEachSemTotArr));
overallHigh.push(getOverallScore(jerryEachSemTotArr));
overallHigh.push(getOverallScore(mickeyEachSemTotArr));
console.log(overallHigh);

console.log(`Overall Score of  Employees are\nTom     Jerry     Mickey\n${overallHigh[0]}    ${overallHigh[1]}      ${overallHigh[2]}`);

// duplicate record insert and find

let objectdup = {
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
      "semesters":[
         {
            "cPrograming":66,
            "operatingSystem":56,
            "englishPaper1":34,
            "tamilPaper1":87
         },
         {
            "cppPrograming":98,
            "DBMS":65,
            "englishPaper2":34,
            "tamilPaper2":86
         },
         {
            "javaPrograming":87,
            "dataStructures":54,
            "englishPaper3":100,
            "tamilPaper3":87
         },
         {
            "MYSQL":87,
            "DBMS":34,
            "englishPaper4":65,
            "tamilPaper4":98
         },
         {
            "javaScript":65,
            "php":98,
            "englishPaper5":34,
            "tamilPaper5":76
         },
         {
            "Node":98,
            "cryptography":84,
            "englishPaper6":83,
            "tamilPaper6":97
         }
      ]
   }
}
// inserting duplicate employee
EmployeesDetailsList.employee.unshift(objectdup);
console.log(EmployeesDetailsList);




dupEmployee = EmployeesDetailsList.employee;

// dupEmployee = EmployeesDetailsList.employee.map((element) => {
//    return  element.name == "Jerry";
    

// }); 

//duplicate emplyee deleting
for(i=0;i<dupEmployee.length;i++){
   let caught =false;
   for(j=1;i<=dupEmployee.length;j++)
   {
      if(dupEmployee[i].empId == dupEmployee[j].empId)
      {
         EmployeesDetailsList.employee.splice(i,1);
          console.log("loopbreak");
          caught = true;
           break; 
         }
   }
   if(caught)
   break;
}
console.log(EmployeesDetailsList.employee);


// employee list for age more than or equal to 18 years

let moreThan15Age = EmployeesDetailsList.employee.filter((element)=>{
   return element.age >= 18;
});
console.log(moreThan15Age);
// output
// [
//    {
//      empId: '0003',
//      name: 'Mickey',
//      age: 18,
//      mobile: 9765645455,
//      email: 'mickey@gmail.com',
//      addresses: [ [Object] ],
//      department: { semesters: [Array] }
//    }
//  ]

//employee contact info mapping

let contactInfo = EmployeesDetailsList.employee.map((element)=>{
   return [element.name,element.mobile,element.email]
});
console.log(contactInfo);
// output
// [
//    [ 'Tom', 96969696969, 'tom@gmail.com' ],
//    [ 'Jerry', 96969696977, 'jerry@gmail.com' ],
//    [ 'Mickey', 9765645455, 'mickey@gmail.com' ]
//  ]


// slice 2-4th semester indexes in array
console.log(tomSemester);
tomSemester = tomSemester.slice(2,4);
console.log(tomSemester);

// subject wise mark show for final semester of mickey
mickeySemester = mickeySemester[mickeySemester.length - 1];
for(let sub in mickeySemester){
   console.log(`${sub}  :  ${mickeySemester[sub]}`);
}

// console table format
console.table(mickeySemester);
// 13/1/2022 - starts


//// check who area all passes in particular semester

for(i =0;i<EmployeesDetailsList.employee.length;i++){
for(let j of EmployeesDetailsList.employee[i].department.semesters){
   console.log(j);
}
}


// sem --> sub add
// sem wise sub wise mark add update
// emp depart which sem which sub,mark -->func

// department details add update
// address add update 
// employee details add update
