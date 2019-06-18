import React, {Component} from 'react';
import {inject,observer} from 'mobx-react'
import LoginItem from './LoginItem';
import LogoutItem from './LogoutItem';
import './home.scss';

@inject('stores')
@observer
class Index extends Component {

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
            </div>
        );
    }
}

export default Index;