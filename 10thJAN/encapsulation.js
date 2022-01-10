// encapsulations = bundled data  or data hiding
// you can access properties only through the getter setter methods.
// browser example
function Student(name, marks) {
    var student_name = name;
    var student_marks = marks;
    Object.defineProperty(this, "name", {
      get: function () {
        return student_name;
      },
      set: function (student_name) {
        this.student_name = student_name;
      },
    });
  
    Object.defineProperty(this, "marks", {
      get: function () {
        return student_marks;
      },
      set: function (student_marks) {
        this.student_marks = student_marks;
      },
    });
  }
  var stud = new Student("Mercy's score is: ", 60);
  console.log(stud.name + " " + stud.marks);


  //
  var employee = function () {
    var name = "Aditya Chaturvedi";
    var exp = new RegExp(/\d+/);
    return {
    setName : function (value) {
    if( exp.test(value) ) {
    alert("Invalid Name");
    }
    else {
    name = value;
    }
    },
    getName : function () {
    return name;
    }
    }; // end of the return
    }(); // Note this '()' means we're calling the function
    // and assigning the returned value to the variable employee
    alert(employee.getName());   // Aditya Chaturvedi
    employee.setName( "Rahul Khanna" );
    alert(employee.getName());  // Rahul Khanna
    employee.setName( 42 ); // Invalid Name; the name does'nt changes.
    employee.name = 42;     // Doesn't affect the private fullName variable.
    alert(employee.getName());  // Rahul Khanna is printed again.


    // The main advantage of using encapsulation in JavaScript is to provide security to the data. Other benefits of encapsulation include:

// Encapsulation guards an object against illegal access.
// Encapsulation helps to achieve a level without revealing its complex details.
// This will reduce human errors.
// Make the application more flexible and manageable.
// Simplifies the application.