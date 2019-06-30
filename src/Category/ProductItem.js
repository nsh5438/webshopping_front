import React from 'react';
import {Link} from "react-router-dom";
const CategoryItem = (props) => {
    let {data} = props;
    let src = `http://localhost:8080/download/${data.id}`;
    let link = `/product/${data.id}`;
    return (
        <div>
            <div className="category-product">
                <img src={src} alt=""/>
                <Link to={link}>{data.name}</Link>
                <div>{data.detail_info}</div>
                <div>{data.selling_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
            </div>
        </div>
    );
};

export default CategoryItem