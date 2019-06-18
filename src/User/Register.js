import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react'

@inject('stores')
@observer
class Register extends Component {
    state = {
        id:"",
        account : "",
        password : "",
        username: "",
        phone : "",
        mobile:"",
        postal_code : "",
        address:"",
        email:"",
        gotoLogin : false
    };
    render() {
        if(this.state.gotoLogin)
            return <Redirect to='/user/login' />;
        return (
            <div>
                <div className="add-content">
                    <div className="add-header">회원가입</div>
                    <div className="input-box">
                        아이디 : <input type="text" value={this.state.account} onChange={this.updateAccount}/>
                    </div>
                    <div className="input-box">
                        비밀번호 : <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                    </div>
                    <div className="input-box">
                        이름 : <input type="text" value={this.state.username} onChange={this.updateName}/>
                    </div>
                    <div className="input-box">
                        전화번호 : <input type="text" value={this.state.phone} onChange={this.updatePhone}/>
                    </div>
                    <div className="input-box">
                        핸드폰 : <input type="text" value={this.state.mobile} onChange={this.updateMobile}/>
                    </div>
                    <div className="input-box">
                        우편번호 : <input type="text" value={this.state.postal_code} onChange={this.updatePostal}/>
                    </div>
                    <div className="input-box">
                        주소 : <input type="text" value={this.state.address} onChange={this.updateAddress}/>
                    </div>
                    <div className="input-box">
                        이메일 : <input type="text" value={this.state.email} onChange={this.updateEmail}/>
                    </div>
                    <div className="add-button">
                        <button onClick={this.onRegister}>확인</button>
                    </div>
                </div>
            </div>
        );
    }

    onRegister = async () => {
        if (this.props.userid && await this.props.stores.UserStore.updateUser(this.state)) {
            this.setState({
                ...this.state,
                gotoLogin: true
            });
        }else if(await this.props.stores.UserStore.onRegister(this.state)){
            this.setState({
                ...this.state,
                gotoLogin: true
            });
        }
    };

    updateAccount = event => {
        this.setState({
            ...this.state,
            account: event.target.value
        });
    };

    updatePassword = event => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    };

    updateName = event => {
        this.setState({
            ...this.state,
            username: event.target.value
        });
    };

    updateEmail = event => {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    };

    updateMobile = event => {
        this.setState({
            ...this.state,
            mobile: event.target.value
        });
    };

    updatePhone = event => {
        this.setState({
            ...this.state,
            phone: event.target.value
        });
    };

    updatePostal = event => {
        this.setState({
            ...this.state,
            postal_code: event.target.value
        });
    };

    updateAddress = event => {
        this.setState({
            ...this.state,
            address: event.target.value
        });
    };
}
export default Register;