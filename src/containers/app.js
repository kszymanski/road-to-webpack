import React, { Component } from 'react';

import Hello from '../components/hello.js';

export default class App extends Component {
    render(){
        return <div className='container'>
            <Hello />
        </div>;
    }
}