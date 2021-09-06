/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import * as messages from './../constants/Message';

class CartItem extends Component {

    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>&nbsp;
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, (item.quantity - 1))}>
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(item.product, (item.quantity + 1))}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.quantity * item.product.price}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDeleteItem(item.product.id)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteItem = id => {
        var {onDeleteItem, onChangeMessage} = this.props;
        onDeleteItem(id);
        onChangeMessage(messages.MSG_DELETE_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        var {onUpdateProductInCart, onChangeMessage} = this.props;
        if (quantity > 0) {
            onUpdateProductInCart(product.id, quantity);
            onChangeMessage(messages.MSG_UPDATE_TO_CART_SUCCESS);
        } else {
            this.onDeleteItem(product.id);
        }
    }
}

export default CartItem;
