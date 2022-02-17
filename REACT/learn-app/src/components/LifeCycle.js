import { Component } from 'react';
class LifeCycle extends Component {
    constructor() {
        super();
        this.state = { counter: 0 ,date : new Date().toLocaleString()};

        var time;
    }
    render() {
        return (
            <div>
                <h4 style={{color:'orange'}}>{this.state.date}</h4>
                <h1>Counter :{this.state.counter}</h1>
                <button onClick={this.stateChangeAdd}>Counter Add</button>
                <button onClick={this.stateChangeSub}>Counter Sub</button>
                <button onClick={this.componentWillUnmount}>Time Off</button>
            </div>
        );
    }
    componentDidMount() {
        this.timeChange();
        console.log("counter in compDidMount :", this.state.counter);

    }
    componentDidUpdate() {
        console.log("counter in compDidUpdate :", this.state.counter)
    }
    componentWillUnmount() {
        clearInterval(this.time);
        console.log("counter in compWillUnmount :", this.state.counter);
    }


    stateChangeAdd = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    stateChangeSub = () => {
        this.setState({ counter: this.state.counter - 1 });
    }


    timeChange = () =>{
       this.time = setInterval(() => {
           this.setState({date:new Date().toLocaleString()})
        }, 1000);
    }
}

export default LifeCycle;