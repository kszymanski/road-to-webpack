import React, { Component } from 'react';

export default class Hello extends Component {
    render(){
        return React.createElement('div',{}, 
            React.createElement('h1', {}, "Krok 2 - Webpack"),
            React.createElement('h2', {}, "Ta strona używa bundle"),
            React.createElement('p', { className: 'how-to' }, "Nie wymaga konfiguracji ale ma swoje minusy...")
            );
    }
}