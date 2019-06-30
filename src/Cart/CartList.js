import React from 'react';
import CartListItem from "./CartListItem";
const CartList = (props) => {
    let {item} = props;
    return (
        <div>
            <div className="cart-list">
                {item.map(item => <CartListItem key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default CartList