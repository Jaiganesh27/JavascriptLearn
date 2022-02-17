import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import LifeCycle from './components/LifeCycle';
function App() {
   var add=(a,b)=>{
      return a + b;
   }
  return (
    <div className="App">
      <h1>I am App Component</h1>
        <Car origin = 'USA' color = 'green' addition = {add}/>  


        <LifeCycle /> 
    </div>
  );
}

export default App;
