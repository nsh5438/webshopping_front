import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class UserStore{
    static __instance = null;
    static getInstance(){
        if (UserStore.__instance === null){
            UserStore.__instance = new UserStore();
        }
        return UserStore.__instance;
    }

    constructor() {
        UserStore.__instance = this;

    }

    @action onRegister = async (newUser) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/add`,
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 100,
                data: newUser
            });
            console.log(response);
            if(response.status === 200){
                return true;
            }
        }
        catch (e) {
            alert(e.toString());
            return false;
        }
    };

    @observable item = null;
    @observable islogin = false;
    @action onLogin = async (user) => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/user/login',
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 100,
                data:user
            });
            if (response.status === 200){
                this.item = response.data;
                if (this.item != ""){
                    this.islogin = true;
                    return true;
                }
                alert('아이디와 비밀번호가 맞지 않습니다.');
                return false;
            }
        }
        catch (e) {
            alert(e.toString());
            return false;
        }
    };
}

export default UserStore.getInstance();