import * as types from './../constants/ActionType';

export const actAddToCart = (action) => {
    return {
        type: "ADD_TO_CART",
        action
    }
}