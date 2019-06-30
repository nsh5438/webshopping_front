import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import LoginItem from './LoginItem';
import CategoryItem from './CategoryItem';
import BestItem from './BestList';
import LogoutItem from './LogoutItem';
import './home.scss';
import image_world from './assets/og-frombts-call.jpg';
import image_star from './assets/SuperStar-BTS-download.jpg';

@inject('stores')
@observer
class Index extends Component {
    state = {
        data: [],
        best_item: []
    };
    componentDidMount() {
        this.props.stores.ProductStore.getBestList();
    }
    render() {

        let LoginComponent = null;
        if (this.props.stores.UserStore.islogin) {
            LoginComponent = <LogoutItem />;
        } else {
            LoginComponent = <LoginItem />
        }
        let u = this.props.stores.UserStore;
        let p = this.props.stores.ProductStore;
        let link = '/';
        if (u.islogin){
            link = `/cart/${u.item.id}`;
        }
        return (
            <div>

                <div className="login-move">
                    {LoginComponent}
                </div>
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
                    <div className="center-content">
                        <p>베스트 추천상품</p>
                        { p.best_item && <BestItem best_item={p.best_item}/> }
                    </div>
                    <div className="right-content">
                        <p>배너광고</p>
                        <img src={image_world} alt=""/>
                        <img src={image_star} alt=""/>
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