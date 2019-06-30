import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import {Redirect} from 'react-router-dom';
@inject('stores')
@observer
class ReviewAdd extends Component {

    state = {
        user_id:'',
        product_id : '',
        title : '',
        content : '',
        goToMain: false
    };

    componentDidMount(){

        if (this.props.stores.UserStore.islogin) {
            this.setState({
                ...this.state,
                user_id : this.props.stores.UserStore.item.id,
                product_id : this.props.id,
            });
        }
    }

    render() {
        if(this.state.goToMain)
            return <Redirect to='/' />;
        return (
            <div className="review-add-content">
                <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                <input type="text" value={this.state.content} onChange={this.updateContent}/>
                <button onClick={this.reviewAdd}>나도 한마디</button>
            </div>
        );
    }

    updateTitle = (event) => {
        this.setState({
            ...this.state,
            title :event.target.value
        });
    };

    updateContent = (event) => {
        this.setState({
            ...this.state,
            content :event.target.value
        });
    };

    reviewAdd = async () => {
        if (this.props.stores.UserStore.islogin) {
            if (await this.props.stores.ReviewStore.onAddReview(this.state)) {
                await this.props.stores.ReviewStore.getReview(this.state.product_id)
            }
        }else{
            alert("로그인을 하고 리뷰를 작성해주세요.");
            this.setState({
                ...this.state,
                goToMain :true
            });
        }
    }
}

export default ReviewAdd;