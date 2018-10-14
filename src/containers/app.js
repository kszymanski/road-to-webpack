import React, { Component } from 'react';

import Hello from '../components/hello.js';

export default class App extends Component {
    render(){
        return React.createElement('div',{className: "container"}, React.createElement(Hello));
    }
}