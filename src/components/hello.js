import React, { Component } from 'react';

export default class Hello extends Component {
    render(){
        return (
            <div>
                <h1>Krok 2 - Webpack</h1>
                <h2>Ta strona używa bundle</h2>
                <p className='how-to'>Nie wymaga konfiguracji ale ma swoje minusy...</p>
            </div>
        );

    }
}