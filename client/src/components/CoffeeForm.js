import React, { Component } from 'react';
const axios = require('axios');

class CoffeeForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            coffeetype: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onChange.bind(this);
    }

    addCoffee = () => {
        const {coffeetype} = this.state;
        axios.post('http://localhost:5000/coffees/post', 
        {coffeetype}).then(data => console.log(data))
       .catch(err => console.log(err));
          // this.props.createCup(cup);

    }
   

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.addCoffee();
    }
  
    render() { 
        return (
            <div>
                <h2>Add a Coffee</h2>

                <form onSubmit={this.onSubmit}>
                    <label>Type of coffee:</label>

                    <input
                    type="text"
                    name="coffeetype"
                    onChange={this.onChange}
                    value={this.state.coffeetype}/>

                    <button type="submit">
                        Submit
                    </button>
                </form>
                
            </div>
        )
    }
}

export default CoffeeForm;
