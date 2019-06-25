import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class ProductStore{
    static __instance = null;
    static getInstance(){
        if (ProductStore.__instance === null){
            ProductStore.__instance = new ProductStore();
        }
        return ProductStore.__instance;
    }

    constructor() {
        ProductStore.__instance = this;

    }

    @observable item = null;
    @action getProduct = async (id) => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/product/getlist/' + id,
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'get',
                timeout: 300
            });
            if (response.status === 200){
                this.item = response.data;
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

export default ProductStore.getInstance();