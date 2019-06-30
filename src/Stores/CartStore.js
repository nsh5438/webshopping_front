import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class CartStore {
    static __instance = null;

    static getInstance() {
        if (CartStore.__instance === null) {
            CartStore.__instance = new CartStore();
        }
        return CartStore.__instance;
    }

    constructor() {
        CartStore.__instance = this;

    }

    @action onAddCart = async (Cart) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/cart/addCart`,
                header: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 6000,
                data: Cart
            });
            if (response.status === 200) {
                return true;
            }
        } catch (e) {
            alert(e.toString());
            return false;
        }
    };

    @action updateIsOrder = async (id) => {
        try{
            let response = await axios({
                url:`http://localhost:8080/cart/updateIsOrder/` + id,
                header: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: 'put',
                timeout: 6000
            });
            if (response.status === 200) {
                return true;
            }
        } catch (e) {
            alert(e.toString());
            return false;
        }
    };

    @action updateCount = async (data) => {
        try{
            let response = await axios({
                url:`http://localhost:8080/cart/updateCount`,
                header: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: 'put',
                timeout: 6000,
                data : data
            });
            if (response.status === 200) {
                return true;
            }
        } catch (e) {
            alert(e.toString());
            return false;
        }
    };

    @observable item = null;
    @action findById = async (id) => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/cart/findById/' + id,
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'get',
                timeout: 6000
            });
            if (response.status === 200){
                this.item = response.data;
                console.log(this.item)
                if (this.item != ""){
                    return true;
                }
                return false;
            }
        }
        catch (e) {
            alert(e.toString());
            return false;
        }
    };

    @action deleteItem = async (id) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/cart/delete/` + id,
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'delete',
                timeout: 3000
            });
            return (response.status === 200);
        }
        catch (e) {
            alert(e.toString());
            return false;
        }
    };
}

export default CartStore.getInstance();