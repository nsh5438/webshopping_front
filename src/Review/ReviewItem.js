import React from 'react';
import {Link} from 'react-router-dom';
const ReviewItem = (props) => {
    let {item} = props;
    return (
        <div className="review-item-content">
            <div className="review-item">{item.title}</div>
            <div className="review-item">{new Date(item.created).toLocaleString()}</div>
            <div className="review-item">{item.content}</div>
        </div>
    );
};

export default ReviewItem;