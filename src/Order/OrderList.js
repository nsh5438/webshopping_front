import React from 'react';
import OrderListItem from "./OrderListItem";
const OrderList = (props) => {
    let {item} = props;
    return (
        <div>
            <div className="cart-list">
                {item.map(item => <OrderListItem key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default OrderList