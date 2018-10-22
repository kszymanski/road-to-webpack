import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Dashboard extends Component {
    render(){
        return (
            <div className='dashboard'>
                <h1>To Jest Dashboard jako moduł aplikacji!</h1>
            </div>
        );
    }
}

export default hot(module)(Dashboard);