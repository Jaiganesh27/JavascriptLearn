import React from "react";
class CarClass extends React.Component{
  constructor(props){
      super(props);
      this.state ={color:'green',brand:'BMW',MFGYear:2000};
  }

  render(){
      return(
          <div>
           <h4>I am Coming From the CarClassComponent</h4>
           <h2 style = {{color:this.props.color}}>I am prop from parent Car</h2>   
          <h3>ClassCarColor: {this.state.color}</h3>
          <h3>ClassCarBrand: {this.state.brand}</h3>
          <h3>ClassCarMFGYear: {this.state.MFGYear}</h3>
          <h1 color="yellow">Add in Child : {this.props.add(20,435)}</h1>
          </div>
      );
      }
}
export default CarClass;