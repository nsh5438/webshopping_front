import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";
import './App.scss';

import Stores from './Stores';
import Home from './Home';
import User from './User';
import Category from './Category';
import Product from './Product';

const App = () => {
    return (
        <Provider stores = {Stores}>
            <BrowserRouter>
                <header className='app-header'>
                    <ul className='menubar'>
                        <li><Link className='menuitem' to="/">Home</Link></li>
                    </ul>
                </header>

                <section className='app-body'>
                    <Route path='/' exact component={Home}/>
                    <Route path='/user/:command?/:userid?' component = {User}/>
                    <Route path="/category/:id" component = {Category}/>
                    <Route path="/product/:id" component = {Product}/>
                </section>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
