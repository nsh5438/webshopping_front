import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";
import './App.scss';

import Stores from './Stores';
import Home from './Home';
import User from './User';

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
                </section>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
