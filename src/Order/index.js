import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import OrderList from './OrderList';
import './order.scss';
@inject('stores')
@observer
class index extends Component {

    componentDidMount(){
        if (this.props.stores.UserStore.islogin){
            this.props.stores.OrderStore.findById(this.props.stores.UserStore.item.id);
        }else {
            alert('로그인부터 해주세요.');
        }
    }

    render() {
        if (!this.props.stores.UserStore.islogin){
            return <Redirect to="/"/>
        }
        let o = this.props.stores.OrderStore;
        return (
            <div>
                <div className="main-content">
                    <p>주문내역</p>
                </div>
                <div className="cart-notice">
                    <div>고객님께서 주문하신 상품내역입니다.</div>
                    {o.item && <OrderList item = {o.item}/>}
                </div>
            </div>
        );
    }
}

export default index;