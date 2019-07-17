import React, { Component } from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import {fetchPosts} from './../actions/postActions';
import PropTypes from 'prop-types';

class Coffee extends Component {

  

    componentWillMount(){
        this.props.fetchPosts();
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
 fetchPosts: PropTypes.func.isRequired,
  coffees: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
    coffees: state.coffees.cups,
    newPost: state.coffees.cup
  });



export default connect(mapStateToProps, {fetchPosts})(Coffee);