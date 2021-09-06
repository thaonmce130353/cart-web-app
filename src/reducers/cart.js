import * as types from './../constants/ActionTypes';
import { findIndex } from 'lodash';

var data = JSON.parse(localStorage.getItem('carts'));
var initState = data ? data : [];

const carts = (state = initState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, (cartItem) => {
                return cartItem.product.id === product.id;
            });
            if (index === -1) {
                state.push({
                    product,
                    quantity
                });
            } else {
                state[index].quantity += quantity; 
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findIndex(state, (cartItem) => {
                return cartItem.product.id === action.id;
            });
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findIndex(state, (cartItem) => {
                return cartItem.product.id === action.id;
            });
            if (index !== -1) {
                state[index].quantity = quantity; 
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default carts;
