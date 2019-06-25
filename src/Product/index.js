import React, {Component} from 'react';
import './product.scss'
import {inject,observer} from 'mobx-react'
@inject('stores')
@observer
class Index extends Component {
    render() {

        let id = this.props.match.params.id;
        // let main_category = "";
        // let sub_category = "";
        // this.props.stores.CategoryStore.item.map(data => {
        //     if (data.id == id){
        //         main_category = data.main_category;
        //         sub_category = data.sub_category;
        //     }
        // });
        return (
            <div>
                <div className="main-content">

                </div>
            </div>
        );
    }
}
export default Index;