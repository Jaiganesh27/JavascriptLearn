import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8081/api/user/';
class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = ({firstName:'',lastName:'',email:'',phone:'',password:'',submitValue:false})
        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit  =this.handleSubmit.bind(this);
    };

 handleEvent(event){
    // console.log("event",event);
    // this.setState({uname:event.target.value});
    let eventName = event.target.name;
    let eventValue = event.target.value;
    this.setState({[eventName]:eventValue})
}

async addNewEmployee(){
    try{
   let result =  axios.post('/add',this.state);  
   console.log("result in post operation",result); 
    }
    catch(err){
        console.log(err);
    }
}


handleSubmit(event){
    this.addNewEmployee();
    event.preventDefault();
}
render(){
    if(this.state && this.state.firstName && this.state.email && this.state.phone)
     this.state.submitValue = false;
     else 
     this.state.submitValue = true;    
return(
    <div>
        <h4>Hello {this.state.uname}</h4> 
        <h4>Here is your Email is {this.state.email}</h4>   
    <form onSubmit ={this.handleSubmit} >
         <label>First Name :</label>
         <input type="text" onChange={this.handleEvent} name ="firstName" value = {this.state.firstName} />
         <br></br>
         <label>Last Name :</label>
         <input type="text" onChange={this.handleEvent} name ="lastName"  value = {this.state.lastName} />
         <br></br>
         <label>Mobile :</label>
         <input type="number" onChange={this.handleEvent} name ="phone"  value = {this.state.phone} />
         <br></br>
         <label>Email :</label>
         <input type="email" onChange={this.handleEvent} name ="email"  value = {this.state.email} />
         <br></br>
         <label>Password :</label>
         <input type="text" onChange={this.handleEvent} name ="password"  value = {this.state.password} />
         <br></br>
         <input type="submit" value="Submit" disabled={this.state.submitValue}/>
    </form>
    </div>
)
}

}

    export default RegisterForm;