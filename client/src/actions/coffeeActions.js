import { FETCH_COFFEE, NEW_COFFEE} from './types';
import axios from 'axios';



  export const fetchCoffee = () => dispatch => {
    axios.get('http://localhost:5000/coffees/all')
    //.then(response => ({coffees: response.data}))
    .then(response => (response.data))
   .then(coffees =>
        dispatch({
          type: FETCH_COFFEE,
          payload: coffees
        })
      );
  };
  
  export const createCoffee = (coffee) => dispatch => {
    
    axios.post('http://localhost:5000/coffees/post', 
    coffee).then(data => console.log(data))
    .then(coffee => 
      dispatch({
        type: NEW_COFFEE,
        payload: coffee
      })
      );
  
      // this.props.createCup(cup);
   
  };