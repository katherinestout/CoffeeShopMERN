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
  
  export const createCoffee = postData => dispatch => {
   
  };