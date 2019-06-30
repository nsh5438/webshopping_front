import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import {Redirect} from 'react-router-dom';
import './point.scss';
@inject('stores')
@observer
class index extends Component {

    componentDidMount(){
        if (this.props.stores.UserStore.islogin){
            this.props.stores.UserStore.getPoint(this.props.stores.UserStore.item.id)
        }else {
            alert('로그인부터 해주세요.');
        }
    }

    render() {
        if (!this.props.stores.UserStore.islogin){
            return <Redirect to="/"/>
        }
        this.props.stores.UserStore.getPoint(this.props.stores.UserStore.item.id)
        let u = this.props.stores.UserStore;
        return (
            <div>
                <div className="main-content">
                    <p>마일리지</p>
                </div>
                <div className="point-notice">
                    <div>고객님의 누적 포인트는 {u.point && u.point.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</div>
                </div>
            </div>
        );
    }
}

export default index;