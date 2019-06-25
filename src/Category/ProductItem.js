import React from 'react';
import {Link} from "react-router-dom";
const CategoryItem = (props) => {
    let {data} = props;
    console.log(data)
    return (
        <div>
            <div className="category-product">
                <Link to="/product">{data.name}</Link>
                <div>{data.detail_info}</div>
                <div>{data.selling_price}</div>
            </div>
        </div>
    );
};

export default CategoryItem