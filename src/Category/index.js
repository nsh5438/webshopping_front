import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './category.scss'
import {inject,observer} from 'mobx-react'
import ProductItem from './ProductItem'
@inject('stores')
@observer
class Index extends Component {
    state = {
        data: []
    };
    componentDidMount() {
        this.props.stores.ProductStore.getProduct(this.props.match.params.id);
    }
    render() {

        let id = this.props.match.params.id;
        let main_category = "";
        let sub_category = "";
        this.props.stores.CategoryStore.item.map(data => {
            if (data.id == id){
                main_category = data.main_category;
                sub_category = data.sub_category;
            }
        });

        if (this.props.stores.ProductStore.item){
            this.state.data = this.props.stores.ProductStore.item;
        }

        return (
            <div>
                <div className="main-content">
                    <p>{main_category} - {sub_category}</p>
                </div>
                <div className="">
                    <div className="category-content">
                        <p>신상품</p>
                        {this.state.data.map(item => <ProductItem data={item} key={item.id} />)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;