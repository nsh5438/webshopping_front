import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import {Link} from 'react-router-dom';
@inject('stores')
@observer
class LogoutItem extends Component {

    render() {
        let user = this.props.stores.UserStore.item;
        return (
            <div>
                {user.username}님
                <Link to= '/' onClick={this.onLogout} >로그아웃</Link>
            </div>
        );
    }

    onLogout = () => {
        this.props.stores.UserStore.item = null;
        this.props.stores.UserStore.islogin = false;
    };
}

export default LogoutItem;