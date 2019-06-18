import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';
class Index extends Component {
    render() {

        if(this.props.match && this.props.match.params.command === 'login')
            return <Login/>;

        if(this.props.match && this.props.match.params.command === 'register')
            return <Register/>;


        return (
            <div></div>
        );
    }
}
export default Index;