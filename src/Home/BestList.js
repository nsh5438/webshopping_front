import React from 'react';
import {Link} from "react-router-dom";
import BestListItem from './BestListItem';
const BestList = (props) => {
    let {best_item} = props;

    return (
        <div>
            <div className="category-content">
                {best_item.map(item => <BestListItem key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default BestList