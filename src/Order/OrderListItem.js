import React from 'react';
import Store from '../Stores';
const OrderListItem = (props) => {
    let {item} = props;
    return (
        <div className="cart-list-item">
            <div>{item.name}</div>
            <div>{item.ct_total}</div>
            <div>{((item.selling_price)*(item.ct_total)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
        </div>
    );
};



export default OrderListItem;