let employeeData = {
    "employees":[
       {
          "empId":"0001",
          "empName":"Tom",
          "age":15,
          "mobile":96969696969,
          "email":"tom@gmail.com",
          "addresses":[
             {
                "addressId":'add1',
                "doorNo":1,
                "street":"cat street",
                "city":"mark henry street",
                "landMark":"kabilan street opp",
                "state":"texas",
                "country":"us",
                "pinCode":600050
             }
          ],
          "department":[
             {
                 "departmentId":'dep1', 
                "departmentName":"computerscience",
                "semester1":[
                   {
                      "subject":"cPrograming",
                      "marks":70
                   },
                   {
                      "subject":"operatingSystem",
                      "marks":55
                   },
                   {
                      "subject":"englishPaper1",
                      "marks":43
                   },
                   {
                      "subject":"tamilPaper1",
                      "marks":90
                   }
                ],
                "semester2":[
                   {
                      "subject":"c++Programing",
                      "marks":67
                   },
                   {
                      "subject":"oS",
                      "marks":45
                   },
                   {
                      "subject":"englishPaper2",
                      "marks":87
                   },
                   {
                      "subject":"tamilPaper2",
                      "marks":98
                   }
                ],
                "semester3":[
                   {
                      "subject":"java",
                      "marks":90
                   },
                   {
                      "subject":"botany",
                      "marks":45
                   },
                   {
                      "subject":"englishPaper3",
                      "marks":97
                   },
                   {
                      "subject":"tamilPaper3",
                      "marks":67
                   }
                ],
                "semester4":[
                   {
                      "subject":"algorithms",
                      "marks":70
                   },
                   {
                      "subject":"datastructures",
                      "marks":65
                   },
                   {
                      "subject":"englishPaper4",
                      "marks":65
                   },
                   {
                      "subject":"tamilPaper4",
                      "marks":34
                   }
                ],
                "semester5":[
                   {
                      "subject":"history",
                      "marks":43
                   },
                   {
                      "subject":"commerce",
                      "marks":55
                   },
                   {
                      "subject":"englishPaper5",
                      "marks":43
                   },
                   {
                      "subject":"tamilPaper5",
                      "marks":90
                   }
                ],
                "semester6":[
                   {
                      "subject":"dbms",
                      "marks":70
                   },
                   {
                      "subject":"javascript",
                      "marks":55
                   },
                   {
                      "subject":"englishPaper6",
                      "marks":43
                   },
                   {
                      "subject":"tamilPaper6",
                      "marks":90
                   }
                ]
             },
             {
                "departmentId":'dep2', 
                "departmentName":"maths",
                "semester1":[
                   null
                ],
                "semester2":[
                   null
                ],
                "semester3":[
                   null
                ],
                "semester4":[
                   null
                ],
                "semester5":[
                   null
                ],
                "semester6":[
                   null
                ]
             },
             {
                "departmentId":'dep3', 
                "departmentName":"accounts",
                "semester1":[
                   null
                ],
                "semester2":[
                   null
                ],
                "semester3":[
                   null
                ],
                "semester4":[
                   null
                ],
                "semester5":[
                   null
                ],
                "semester6":[
                   null
                ]
             }
          ]
       }
    ]
 }


 console.log(employeeData);
  
    //  console.log(employeeFullTemplate);


function addEmployee(empid,empname,empage,empmobile,empemail,empaddresses,empdepartment){
    const employeeFullTemplate = {
        empId: null,
        empName: null,
        age: null,
        mobile: null,
        email: null,
        addresses: [],
        department: []
      }
    employeeFullTemplate.empId = empid;
    employeeFullTemplate.empName = empname;
    employeeFullTemplate.age = empage;
    employeeFullTemplate.mobile = empmobile;
    employeeFullTemplate.email = empemail;
    employeeFullTemplate.addresses.push(empaddresses);
    employeeFullTemplate.department.push(empdepartment);
    employeeData.employees.push(employeeFullTemplate);
}
function addNewEmpSemester(sub,mark){
    const  semesterTemplate = {
        subject:null,
        marks:null
     }
     semesterTemplate.subject = sub;
     semesterTemplate.marks = mark;
    return semesterTemplate;
}

function addNewEmpAddress(addId,door,street,city,landMark,state,country,pinCode){  
    let addressTemplte = {
        addressId:null,
        doorNo:null,
        street:null,
        city:null,
        landMark:null,
        state:null,
        country:null,
        pinCode: null
    }  

    addressTemplte.addressId = addId;
    addressTemplte.doorNo = door;
    addressTemplte.street = street;
    addressTemplte.city = city;
    addressTemplte.landMark = landMark;
    addressTemplte.state = state;
    addressTemplte.country = country;
    addressTemplte.pinCode = pinCode;
    return addressTemplte;
}
function addNewEmpDepartment(depId,depName,semester1,semester2,semester3,semester4,semester5,semester6){
    const  departmentTemplate = {
        departmentId:null,
        departmentName:null,
        semester1:[],
        semester2:[],
        semester3:[],
        semester4:[],
        semester5:[],
        semester6:[]
    }
    departmentTemplate.departmentId = depId;
    departmentTemplate.departmentName = depName;
    departmentTemplate.semester1.push(semester1);
    departmentTemplate.semester2.push(semester2);
    departmentTemplate.semester3.push(semester3);
    departmentTemplate.semester4.push(semester4);
    departmentTemplate.semester5.push(semester5);
    departmentTemplate.semester6.push(semester6);
    return departmentTemplate;
}
// employee adding
addEmployee('0002','ranesh',19,9940234233,'ganesh@gmail.com',
addNewEmpAddress('add1',5,'gokul street','chennai','park opp','tamilnadu','india',600450),
addNewEmpDepartment('dep1','history',addNewEmpSemester('histoty',56),addNewEmpSemester('anceintcoins',50),
addNewEmpSemester('ecommerce',70),addNewEmpSemester('accounts',75),addNewEmpSemester('tamil',98),
addNewEmpSemester('english',92)));


// employee adding
addEmployee('0003','ganesh',19,9940234233,'ganesh@gmail.com',
addNewEmpAddress('add1',5,'gokul street','chennai','park opp','tamilnadu','india',600450),
addNewEmpDepartment('dep1','history',addNewEmpSemester('histoty',56),addNewEmpSemester('anceintcoins',50),
addNewEmpSemester('ecommerce',70),addNewEmpSemester('accounts',75),addNewEmpSemester('tamil',98),
addNewEmpSemester('english',92)));

function deleteEmployee(empid){
    let temp = false;
     employeeData.employees.forEach((element,index) => {
        if(element.empId = empid)
            employeeData.employees.splice(index,1); 
            temp  = true;
     }); 
     if(temp)
         console.log("Employeee Deletion Successful!");
     else
        console.log("Employee Not Found!");
}
// deleteEmployee('0001');

// ADDRESS DETAILS MANIPULATION

// add additional address to employee
function addAdditionalAddressToEmployee(empid,addId,door,street,city,landMark,state,country,pinCode){
    let newAddress = addNewEmpAddress(addId,door,street,city,landMark,state,country,pinCode);
    console.log(newAddress);
    // obj ={ 
    //      empId : empid,
    // }
    let isFound =[];
   employeeData.employees.forEach((element) =>{
            if(element.empId == empid){
                // console.log("hii i am if block");
               isFound = element.addresses.filter((ele) =>{
                   return ele.addressId == addId
                });
            }
    })
    console.log(isFound);
    if(isFound.length == 0){
    employeeData.employees.forEach((element) =>{
        if(element.empId == empid){
            element.addresses.push(newAddress);  
            // console.log("hii i am if block");
            console.log("employee Address added!");
        }
     })
    }
    else
    console.log("please give unique address id");
}
addAdditionalAddressToEmployee('0003','add2','13/7','raja street','mylapore','school opp','tn','india',600700);

// delete employee address details
function deleteAddressForEmployee(empid,addressid) {
    let temp = false;
    employeeData.employees.forEach((element) =>{
        if(element.empId == empid)
        {
            // console.log("hiiif block");
                element.addresses.forEach((ele,index) =>{
                if(ele.addressId == addressid)
                {
                    element.addresses.splice(index,1);
                    temp = true;
                //    console.log("address id found");
                }
            });
        }
    });
    if(temp)
         console.log("Employeee Address Deletion Successful!");
     else
        console.log("Employe Address Not Found!");       
}
// deleteAddressForEmployee('0003','add1');

// update employee address details

function updateAddress(empid,addressid,door,street,city,landMark,state,country,pinCode){
    let newAddress = addNewEmpAddress(addressid,door,street,city,landMark,state,country,pinCode);
    let temp = false;
          employeeData.employees.forEach(element => {
            if(element.empId == empid)
            {
                    element.addresses.forEach((ele,index) =>{
                    if(ele.addressId == addressid)
                    {
                        console.log("hii i am if block")
                       element.addresses.splice(index,1);
                       element.addresses.push(newAddress);  
                       temp = true;
                    }
                });
            }
     });
     if(temp)
         console.log("Employeee Address Deletion Successful!");
     else
        console.log("Employe Address Not Found!"); 
}


// checking address operations
updateAddress('0003','add2','100/304','kumar street','velachery','church opp','kerala','india',600700);
addAdditionalAddressToEmployee('0003','add1','15/7','raja street','mylapore','school opp','tn','india',600700);
// updateAddress('0003','add2','400/1','raja street','mylapore','school opp','tn','india',600700);


// get address with and without address id
function getAddressOfEmployee(empid,addid){
    let address,temp;
 employeeData.employees.forEach((element)=>{
     if (element.empId == empid){
      if(addid){
          address = element.addresses.filter((ele)=>{
              if(ele.addressId == addid)
              console.log("hii i am if block")
              return ele; 
          });
      }
      else{
        address = element.addresses;
      }
      temp = true;
    }
 })
 if(temp)
 console.log(address);
 else
 console.log("Address not  Found!!"); 
}
getAddressOfEmployee('0003','add1')


// DEPARTMENT DETAILS MANIPULATION
// adding department without duplicate depId

// Department Details Update/add/delete
function addOrUpdateDepartmentForEmployeeWithoutSemester(empid,depId,depName,status){
    let isDep,temp;
    employeeData.employees.forEach((element) =>{
    if(element.empId == empid)
    {
       if(status =='NEW'){
           console.log("status new");
           isDep = element.department.filter((ele)=>{
           return ele.departmentId  == depId;
       });
         if(isDep.length == 0){
            console.log("status new");
          obj  =  addNewEmpDepartment(depId,depName);
          console.log(obj);
        element.department.push(obj);
         temp = true;
         }
        else{
           console.log("Employee Department Duplicate !");
         }
    }
    else if(status =='UPDATE'){
        {
            console.log("status update");
            element.department.forEach((ele)=>{
            if(ele.departmentId  == depId){
                ele.departmentName = depName;
                temp = true;
            }
        });
     }   
    }
    else if(status =='DELETE'){
        {
            console.log("status delete");
            element.department.forEach((ele,index)=>{
            if(ele.departmentId  == depId){
                element.department.splice(index,1);
                temp = true;
            }
        });
     }   
    }
    else 
        console.log("Invalid Status Caoght!")
    }
    else
      temp = false;
})
if(temp)
console.log("Employeee Department Add/Update/Delete Successful!");
else
console.log("Employee not Found! / Employee Department Duplicate!"); 
}
// employee department add
addOrUpdateDepartmentForEmployeeWithoutSemester('0001','dep5','commerce','NEW');
// employee department update
addOrUpdateDepartmentForEmployeeWithoutSemester('0001','dep5','biograpy','UPDATE');
// employee department delete (need to pass 3 param because of single function for update add  delete)
addOrUpdateDepartmentForEmployeeWithoutSemester('0001','dep5','','DELETE');


// Semester Marks Manipulations
function getSemesterSubjectWiseMarks(empid,depid,semno){
 let semesterDetails = [];
    employeeData.employees.forEach((element)=>{
     if(element.empId == empid){
         element.department.forEach((ele,index)=>{
            //   if(ele.departmentId == depid && semno == 'semester1') 
            //    return ele.;
            if(ele.departmentId == depid){
                if(semno){
                switch(semno){
                    case 1:
                        semesterDetails.push(ele.semester1);
                        break;
                    case 2:
                        semesterDetails.push(ele.semester2);
                        break;
                    case 3:
                        semesterDe,tails.push(ele.semester3); 
                        break; 
                    case 4:
                        semesterDetails.push(ele.semester4);
                        break;
                    case 5:
                        semesterDetails.push(ele.semester5);
                        break;
                    case 6:
                        semesterDetails.push(ele.semester6);   
                        break;
                    default:
                        console.log("No semester matched!");
            
                    }
            }
            else{
                semesterDetails.push(ele.semester1,ele.semester2,ele.semester3,
                    ele.semester4,ele.semester5,ele.semester6);
             console.log("i am else block");
            }
        }
        

         })
     }
  })
console.log("hii",semesterDetails);
}
//get semester of one employee  third param is optional '' means all sem data or 1-6 given particular sem data.
getSemesterSubjectWiseMarks('0001','dep1','');
getSemesterSubjectWiseMarks('0001','dep1',5);

// pending semester details 
