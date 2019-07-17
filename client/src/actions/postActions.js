import { FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';



  export const fetchPosts = () => dispatch => {
    axios.get('http://localhost:5000/coffees/all')
    //.then(response => ({coffees: response.data}))
    .then(response => (response.data))
   .then(coffees =>
        dispatch({
          type: FETCH_POSTS,
          payload: coffees
        })
      );
  };
  
  export const createPost = postData => dispatch => {
   
  };