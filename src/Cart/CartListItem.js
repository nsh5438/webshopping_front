import React from 'react';
import Store from '../Stores';
const CartListItem = (props) => {

    let {item} = props;
    return (
        <div className="cart-list-item">
            <div>{item.name}</div>
            <div>{item.count}</div>
            <div>{((item.selling_price)*(item.count)).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
            <div><button onClick={deleteItem.bind(this, item.id)}>삭제</button></div>
        </div>
    );
};

const deleteItem = async (id) => {
        if(window.confirm("삭제하시겠습니까?") === false) return;
        if (await Store.CartStore.deleteItem(id)) {
            await Store.CartStore.findById(Store.UserStore.item.id)
        }
};

export default CartListItem;