import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import {Redirect} from 'react-router-dom';
import CartList from './CartList';
import './cart.scss';
@inject('stores')
@observer
class index extends Component {

    state = {
        goToMain : false
    };

    componentDidMount(){
        if (this.props.stores.UserStore.islogin){
            this.props.stores.CartStore.findById(this.props.stores.UserStore.item.id)
        }else {
            alert('로그인부터 해주세요.');
        }
    }

    render() {

        if (this.state.goToMain){
            return <Redirect to="/"/>
        }
        if (!this.props.stores.UserStore.islogin){
            return <Redirect to="/"/>
        }
        let c = this.props.stores.CartStore;
        return (
            <div>
                <div className="main-content">
                    <p>장바구니</p>
                </div>
                <div className="cart-notice">
                    <div>고객님께서 주문하신 상품내역을 변경하시거나 삭제하실 수 있습니다.</div>
                    {c.item && <CartList item = {c.item}/>}
                </div>
                <div className="cart-order">
                    <button onClick={this.addOrder}>주문하기</button>
                </div>
            </div>
        );
    }

    addOrder = async () => {
        let u = this.props.stores.UserStore;
        let c = this.props.stores.CartStore;
        if (u.islogin){

            c.item.map(item => {
                let data = {
                    user_id: u.item.id,
                    product_id : item.product_id,
                    count : item.count,
                    all_total : (item.selling_price)*(item.count),
                };

                let user = {
                  id : u.item.id,
                  point : u.item.point + item.point
                };
                this.props.stores.OrderStore.onAddOrder(data);
                this.props.stores.CartStore.updateIsOrder(item.id);
                this.props.stores.UserStore.updatePoint(user);
            });

            alert("상품 주문이 완료 되었습니다.");
            this.props.stores.ProductStore.getBestList();
            this.setState({
                ...this.state,
                goToMain :true
            });
        }else {
            alert("로그인을 하고 상품 주문을 해주세요.");
            this.setState({
                ...this.state,
                goToMain :true
            });
        }
    }
}

export default index;