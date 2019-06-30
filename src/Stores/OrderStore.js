import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class OrderStore {
    static __instance = null;

    static getInstance() {
        if (OrderStore.__instance === null) {
            OrderStore.__instance = new OrderStore();
        }
        return OrderStore.__instance;
    }

    constructor() {
        OrderStore.__instance = this;

    }

    @action onAddOrder = async (Order) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/order/addOrder`,
                header: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 6000,
                data: Order
            });
            console.log(response);
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
                url: 'http://localhost:8080/order/findById/' + id,
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

}

export default OrderStore.getInstance();