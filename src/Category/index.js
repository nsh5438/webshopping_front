import React, {Component} from 'react';
import './category.scss'
import {inject,observer} from 'mobx-react'
@inject('stores')
@observer
class Index extends Component {
    render() {

        // if(this.props.match && this.props.match.params.command === 'login')
        //     return <Login/>;
        //
        // if(this.props.match && this.props.match.params.command === 'register')
        //     return <Register/>;

        let id = this.props.match.params.id;
        let main_category = "";
        let sub_category = "";
        this.props.stores.CategoryStore.item.map(data => {
            if (data.id == id){
                main_category = data.main_category;
                sub_category = data.sub_category;
            }
        });
        return (
            <div>{category}</div>
        );
    }
}
export default Index;