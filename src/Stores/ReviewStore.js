import {observable, action} from 'mobx/lib/mobx'
import axios from 'axios'

class ReviewStore{
    static __instance = null;
    static getInstance(){
        if (ReviewStore.__instance === null){
            ReviewStore.__instance = new ReviewStore();
        }
        return ReviewStore.__instance;
    }

    constructor() {
        ReviewStore.__instance = this;

    }

    @observable review_item = null;
    @action getReview = async (id) => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/review/getReview/' + id,
                header:{
                    "Content-Type":"application/json; charset=UTF-8"
                },
                method: 'get',
                timeout: 6000
            });
            if (response.status === 200){
                this.review_item = response.data;
                if (this.review_item != ""){
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

    @action onAddReview = async (review) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/review/addReview`,
                header: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: 'post',
                timeout: 6000,
                data: review
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
}

export default ReviewStore.getInstance();