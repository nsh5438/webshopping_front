import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";
import './App.scss';

import Stores from './Stores';
import Home from './Home';
import User from './User';
import Category from './Category';
import Product from './Product';
import Cart from './Cart';
import Order from './Order';
import Point from './Point';

class App extends Component {


    render() {
        return (

            <Provider stores={Stores}>
                <BrowserRouter>
                    <header className='app-header'>
                        <ul className='menubar'>
                            <li><Link className='menuitem' to="/">Home</Link></li>
                            <li><Link className='menuitem' to="/cart">장바구니</Link></li>
                            <li><Link className='menuitem' to="/order">주문내역</Link></li>
                            <li><Link className='menuitem' to="/point">마일리지</Link></li>
                            <li><Link className='menuitem' to="/">회원정보</Link></li>
                        </ul>
                    </header>

                    <section className='app-body'>
                        <Route path='/' exact component={Home}/>
                        <Route path='/user/:command?/:userid?' component={User}/>
                        <Route path="/category/:id" component={Category}/>
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/order" component={Order}/>
                        <Route path="/point" component={Point}/>
                    </section>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
