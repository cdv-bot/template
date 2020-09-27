import * as types from './../constants/ActionType';

let initialState = 'hello';
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return action.action;
        default:
            return state;
    }
}

export default cart;