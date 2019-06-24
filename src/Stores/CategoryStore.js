import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class CategoryStore{
    static __instance = null;
    static getInstance(){
        if (CategoryStore.__instance === null){
            CategoryStore.__instance = new CategoryStore();
        }
        return CategoryStore.__instance;
    }

    constructor() {
        CategoryStore.__instance = this;

    }

    @observable item = null;
    @action getCategory = async (main_category) => {
        let data = {
            "main_category" : main_category
        };
        try{
            let response = await axios({
                url: 'http://localhost:8080/category/getSubCategory',
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 300,
                data: data
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

export default CategoryStore.getInstance();