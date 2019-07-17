import React, { Component } from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import {fetchCoffee} from './../actions/coffeeActions';
import PropTypes from 'prop-types';

class Coffee extends Component {

  

    componentWillMount(){
        this.props.fetchCoffee();
    }
/*
      componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }*/


    render() {

const coffeeItems = this.props.coffees.map(coffee => (
            <div key = {coffee._id}>
                <h3>{coffee.coffeetype}</h3>
            </div>
        ) )
        return (
            <div>
                <h2>Coffee Types</h2>

                {coffeeItems}
                
            </div>
        )
    }
}

Coffee.propTypes = {
 fetchCoffee: PropTypes.func.isRequired,
  coffees: PropTypes.array.isRequired,
  newCoffee: PropTypes.object
};

const mapStateToProps = state => ({
    coffees: state.coffees.cups,
    newCoffee: state.coffees.cup
  });



export default connect(mapStateToProps, {fetchCoffee})(Coffee);