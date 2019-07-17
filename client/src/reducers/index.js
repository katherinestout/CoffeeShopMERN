import { combineReducers } from 'redux';
import coffeeReducer from './coffeeReducer';

export default combineReducers({
  coffees: coffeeReducer
});