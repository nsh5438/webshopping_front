import React from 'react';
import ReviewItem from './ReviewItem';
import ReviewAdd from './ReviewAdd';
import './review.scss'
const Index = (props) => {
    let {item} = props;
    let {id} = props;

    return (
        <div className="review-content">
            <ReviewAdd id={id}/>
            <div className="review-item-title review-item-content">
                <div className="review-item">제목</div>
                <div className="review-item">등록날짜</div>
                <div className="review-item">내용</div>
            </div>
            {item.map(item => <ReviewItem key={item.id} item={item} />)}
        </div>
    );
};

export default Index;