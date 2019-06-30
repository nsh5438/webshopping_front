import React, {Component} from 'react';
import './product.scss'
import Review from '../Review';
import {inject,observer} from 'mobx-react'
import {Redirect} from 'react-router-dom';
@inject('stores')
@observer
class Index extends Component {
    //user_id, product_id, `count`
    state = {
        user_id : '',
        product_id : '',
        count : '',
        goToMain : false,
        goToCart : false
    };
    componentDidMount(){
        this.props.stores.ProductStore.findById(this.props.match.params.id);
        this.props.stores.ReviewStore.getReview(this.props.match.params.id);
        if (this.props.stores.UserStore.islogin) {
            this.setState({
                ...this.state,
                user_id : this.props.stores.UserStore.item.id,
                product_id : this.props.match.params.id
            });
        }
    }
    render() {
        this.props.stores.ReviewStore.getReview(this.props.match.params.id);
        if(this.state.goToMain)
            return <Redirect to='/' />;
        if(this.state.goToCart){
            return <Redirect to='/cart'/>
        }
        let id = this.props.match.params.id;

        let p = this.props.stores.ProductStore.product;
        let r = this.props.stores.ReviewStore;
        let src = `http://localhost:8080/download/${id}`;
        return (
            <div>
                <div className="product-detail-content">
                    <img src={src} alt=""/>
                    <div className="product-detail-info">
                        <div className="product-name">{p && p.name}</div>
                        <div>판매가격 : {p && p.selling_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
                        <div>시중가격 : {p && p.market_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</div>
                        <div>제조사 : {p&&p.company}</div>
                        <div>마일리지 : {p && p.point.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} 적립</div>
                        <div>수량 : <input type="number" value={this.state.count} onChange={this.updateCount}/></div>
                        <div><button onClick={this.addCart}>장바구니</button></div>
                    </div>
                </div>
                <div className="product-detail-long_info">
                    <div>
                        <p>상세정보</p>
                        <div>{p && p.detail_info}</div>
                    </div>
                    <div>
                        <p>구매정보</p>
                        <div>{p && p.buy_info}</div>
                    </div>
                    <div>
                        <p>고객의 상품평</p>
                        <div>* 고객의 상품평은 추후 쇼핑몰의 제품 선정에 중요한 역할을 합니다.</div>
                        <div>* 쇼핑몰의 더 나은 상품선정과 고객 분들의 쇼핑문화의 질을 높이고자</div>
                        <div> 좋은 평은 매월 심사 후 쇼핑몰 메인에 올려드리고 선물을 증정하고 있습니다.</div>
                        <div>
                            { r.review_item && <Review item={r.review_item} id={id}/> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    updateCount = (event) => {
        this.setState({
            ...this.state,
            count :event.target.value
        });
    };
    addCart = async () => {
        let p = this.props.stores.ProductStore.product;
        let u = this.props.stores.UserStore;
        if (u.islogin){
            if (this.state.count === '' || this.state.count === '0'){
                alert("수량을 입력해주세요.")
                return ;
            } else {
                if (await this.props.stores.CartStore.onAddCart(this.state)) {
                    if (window.confirm("장바구니에 담겼습니다. 이동하시겠습니까?")){
                        this.setState({
                            ...this.state,
                            goToCart :true
                        });
                    }
                }
            }
        }else {
            alert("로그인을 하고 상품 주문을 해주세요.");
            this.setState({
                ...this.state,
                goToMain :true
            });
        }
    }
}
export default Index;