import React from "react";

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleSubmit = (event) => {
        console.log(this);
        alert("The Name is :" + this.state.value)
        event.preventDefault();
    }
    handleOnChange = (event) => {
        console.log(this);
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleOnChange} />
                </label> */


                <label>Email
                 <input type="email" value={this.state.value} onChange={this.handleOnChange}/>
                 </label>
                }
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Forms;