import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';

import Loading from '../components/loading';

const AdminModule = Loadable({
    loader: () => import(/* webpackChunkName: "AdminModule" */'./admin'),
    loading: Loading
});

const DashboardModule = Loadable({
    loader: () => import(/* webpackChunkName: "DashboardModule" */'./dashboard'),
    loading: Loading
});

class App extends Component {
    render() {
        return (
            <Router>
                <div className='application'>
                    <nav className='nav'>
                        <ul>
                            <li><NavLink to='/' activeClassName='active' exact>Dashboard</NavLink></li>
                            <li><NavLink to='/admin' activeClassName='active'>Admin</NavLink></li>
                        </ul>
                    </nav>
                    <div className='container'>
                        <Route exact path='/' component={DashboardModule} />
                        <Route exact path='/admin' component={AdminModule} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App)