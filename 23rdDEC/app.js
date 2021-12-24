// Execution context 
// Execution Context are two types 
// Global execution context and functional execution context
// Javascript program always run with global execution firstly
// Then if any functions has been called it will create Execution context stack 
// execution context will created and added to the top of the ecs and then it has been changed
// will  complete the execution context it will popped from ecs
// based on this execution context works!! 
function func1(){
console.log("hii");
}
function func2(){
    func3();
}
function func3(){
func4();
}
function func4(){
func1();
}
function func5(){
func2();
}
func5();
