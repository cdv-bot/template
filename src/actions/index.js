import * as types from './../constants/ActionType';

export const acFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}