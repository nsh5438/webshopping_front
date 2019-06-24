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
                    <button>하의(남)</button>
                    <button onClick={this.getSubCategory.bind(this, "상의(여)")}>상의(여)</button>
                    <button>하의(여)</button>
                    <button>구두</button>
                    <button>가방</button>
                    <button>소품</button>
                </div>
                <div className="sub_category">
                    { this.state.data.length > 0 && <CategoryItem data={this.state.data}/> }
                </div>
                <div className="main-content">
                    <p>메인화면</p>
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