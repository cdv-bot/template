import * as types from './../constants/ActionType';

let initialState = [];
const Products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return [...action.products];
        default:
            return state;
    }
}

export default Products;