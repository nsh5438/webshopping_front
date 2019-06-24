import React from 'react';
import {Link} from "react-router-dom";
const CategoryItem = (props) => {
    let {data} = props;
    return (
        <div>
            <div className="sub_category">
                {data.map(item =>
                    <Link key={item.id} to={'/category/' + item.id}>{item.sub_category}</Link>)}
            </div>
        </div>
    );
};

export default CategoryItem