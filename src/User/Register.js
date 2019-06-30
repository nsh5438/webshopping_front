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
        check_password:"",
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
                    <div className="add-info">
                        <div>저렴한 가격과 신개념 고객 서비스를 통해 고객 만족을 최우선으로 합니다.</div>
                        <div>쇼핑몰에 회원으로 가입하시면 보다 나은 편리합니다.</div>
                    </div>
                    <div className="input-box">
                        <div className="idcheck">희망아이디 : <input type="text" value={this.state.account} onChange={this.updateAccount}/></div>
                        <div><button onClick={this.CheckId}>중복확인</button></div>
                    </div>
                    <div className="input-box">
                        희망비밀번호 : <input type="password" value={this.state.password} onChange={this.updatePassword}/>
                    </div>
                    <div className="input-box">
                        패스워드확인 : <input type="password" value={this.state.check_password} onChange={this.updateCheckPassword}/>
                    </div>
                    <div className="input-box">
                        성명 : <input type="text" value={this.state.username} onChange={this.updateName}/>
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
                        이메일주소 : <input type="text" value={this.state.email} onChange={this.updateEmail}/>
                    </div>
                    <div className="usercheck">
                        <div>회원약관</div>
                        <div className="check-content"></div>
                    </div>
                    <div className="add-button">
                        <button onClick={this.onRegister}>확인</button>
                    </div>
                </div>
            </div>
        );
    }

    CheckId = async () => {
        this.props.stores.UserStore.CheckId(this.state.account);
        setTimeout(()=> {
            if (this.props.stores.UserStore.isCheck){
                alert('사용 가능합니다.');
                return ;
            }else{
                alert('다른 아이디를 사용해주세요.');
                this.setState({
                    ...this.state,
                    account: ''
                });
            }
        },1000);
    };

    onRegister = async () => {
        if (this.state.check_password !== this.state.password){
            alert("비밀번호를 확인해주세요.");
            return ;
        }
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

    updateCheckPassword = event => {
        this.setState({
            ...this.state,
            check_password: event.target.value
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