import React, { Component } from 'react';

export default class Hello extends Component {
    render(){
        return <div>
            <h1>Krok 5 - Lepszy artefakt</h1>
            <h2>Ta ma tree shaking i kilka bundli</h2>
            <p className='how-to'>Wymaga pluginów, loaderów i buduje się w ładny arefakt, ale...</p>
        </div>
    }
}