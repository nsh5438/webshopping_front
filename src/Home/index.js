import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import LoginItem from './LoginItem';
import CategoryItem from './CategoryItem';
import LogoutItem from './LogoutItem';
import './home.scss';
import {Link} from "react-router-dom";

@inject('stores')
@observer
class Index extends Component {

    state = {
        data: []
    };
    componentDidUpdate(prevProps, prevState) {

    }
    render() {
        let LoginComponent = null;
        if (this.props.stores.UserStore.islogin) {
            LoginComponent = <LogoutItem />;
        } else {
            LoginComponent = <LoginItem />
        }
        return (
            <div>
                {LoginComponent}
                <div className="main_category">
                    <button onClick={this.getSubCategory.bind(this, "상의(남)")}>상의(남)</button>
                    <button onClick={this.getSubCategory.bind(this, "하의(남)")}>하의(남)</button>
                    <button onClick={this.getSubCategory.bind(this, "상의(여)")}>상의(여)</button>
                    <button onClick={this.getSubCategory.bind(this, "하의(여)")}>하의(여)</button>
                    <button onClick={this.getSubCategory.bind(this, "구두")}>구두</button>
                    <button onClick={this.getSubCategory.bind(this, "가방")}>가방</button>
                    <button onClick={this.getSubCategory.bind(this, "소품")}>소품</button>
                </div>
                <div className="sub_category">
                    { this.state.data.length > 0 && <CategoryItem data={this.state.data}/> }
                </div>
                <div className="main-content">
                    <p>메인화면</p>
                </div>
                <div className="product-content">
                    <div className="left-content">
                        <p>베스트 추천상품</p>

                    </div>
                    <div className="center-content">
                        <p>베스트 추천상품</p>
                        <div className="product">
                            <Link to="/product">상품이름</Link>
                            <div>상품내용</div>
                            <div>상품가격</div>
                        </div>
                    </div>
                    <div className="right-content">
                        <p>배너광고</p>
                    </div>
                </div>
            </div>
        );
    }

    getSubCategory = async (main_category) => {
        this.props.stores.CategoryStore.item = null;
        if (await this.props.stores.CategoryStore.getCategory(main_category)) {
            // this.props.stores.CategoryStore.item.map(item => {
                this.setState({
                    ...this.state,
                    data: this.props.stores.CategoryStore.item
                });
            // })
        }
    }
}

export default Index;