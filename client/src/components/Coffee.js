import React, { Component } from 'react';
import axios from 'axios';

class Coffee extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffees: []
        }
    }

    getCups = () => {
        axios.get('http://localhost:5000/coffees/all')
        .then(response => this.setState({coffees: response.data}))
        .catch(err => console.log(err));
    }

    componentDidMount(){
    this.getCups();
    }


    render() {

        const coffeeItems = this.state.coffees.map(coffeetype => (
            <div key = {coffeetype.id}>
                <h3>{coffeetype.coffeetype}</h3>

            </div>
        ) )
        return (
            <div>
                <h2>Coffee Types:</h2>

                {coffeeItems}
                
            </div>
        )
    }
}
export default Coffee;