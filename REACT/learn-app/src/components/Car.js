import CarClass from "./CarClass";
function Car(props){
    let carName = 'BMW';
    let carColor = 'darkBlue';
    let carModel = '2022';
    console.log("props",props);
  return(
      <div>
          <h3>Use One Component From Another</h3>
          <h2 style={{color:props.color}}>My Car Origin  is :{props.origin} from Parent  App </h2>
          <h4 stype={{background:'blue'}}>add function: {props.addition(5,10)}</h4>
          <h2>My Car is :{carName}</h2>
          <h2>My Car is :{carColor}</h2>
          <h2>My Car is :{carModel}</h2>

          <br></br>
          <CarClass color ='Blue' add = {props.addition}/>

      </div>
  )
}

export default Car;