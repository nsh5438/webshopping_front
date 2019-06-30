import React from 'react';
import {Link} from 'react-router-dom';
const BestListItem = (props) => {
    let {item} = props;
    let src = `http://localhost:8080/download/${item.id}`;
    let link = `/product/${item.id}`;
    return (
        <div className="category-product">
            <img src={src} alt=""/>
            <Link to={link}>{item.name}</Link>
            <div>{item.detail_info}</div>
            <div>{item.selling_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
        </div>
    );
};

export default BestListItem;