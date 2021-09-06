import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from "../components/CartResult";
import * as messages from './../constants/Message';
import {deleteProductInCart, changeMessage, updateProductInCart} from './../actions/index';

class CartsContainer extends Component {
    render() {
        var {carts} = this.props;
        return (
            <Cart>
                {this.showCartItem(carts)}
                {this.showTotal(carts)}
            </Cart>
        );
    }

    showCartItem = (carts) => {
        var result = <tr><td>{messages.MSG_CART_EMPTY}</td></tr>;
        var {onDeleteItem, onChangeMessage, onUpdateProductInCart} = this.props;
        if (carts.length > 0) {
            result = carts.map((item, index) => {
                return <CartItem key={index}
                            item={item}
                            index={index}
                            onDeleteItem={onDeleteItem}
                            onChangeMessage={onChangeMessage}
                            onUpdateProductInCart={onUpdateProductInCart}
                        />
            })
        }
        return result;
    }

    showTotal = (carts) => {
        var result = null;
        if (carts.length > 0) {
            result = <CartResult carts={carts}/>
        }
        return result;
    }
}

CartsContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteItem: (id) => {
            dispatch(deleteProductInCart(id))
        },
        onChangeMessage: message => {
            dispatch(changeMessage(message));
        },
        onUpdateProductInCart: (id, quantity) => {
            dispatch(updateProductInCart(id, quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
