import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createCoffee} from '../actions/coffeeActions';

//const axios = require('axios');



class CoffeeForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            coffeetype: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

  
   

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const coffee = {coffeetype: this.state.coffeetype};

      this.props.createCoffee(coffee);
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

CoffeeForm.propTypes = {
    createCoffee: PropTypes.func.isRequired
};

export default connect(null, {createCoffee})(CoffeeForm);
