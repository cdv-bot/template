import { combineReducers } from 'redux';
import cart from './cart';

const reducts = combineReducers({
    cart: cart
});

export default reducts;