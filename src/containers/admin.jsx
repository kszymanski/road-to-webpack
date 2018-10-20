import React, { Component } from 'react';

export default class Hello extends Component {
    constructor(props){
        super(props);
        this.state = {
            array: []
        }
        this.fillup = this.fillup.bind(this);
    }

    fillup() {
        import(/* webpackChunkName: "Lodash" */'lodash')
            .then( ({default: _ }) => {
                const array = _.times(10);
                this.setState({array});
            })
    }

    render(){
        return (
            <div className='admin'>
                <h1>To Jest Admin Panel jako moduł aplikacji!</h1>
                <div className='numbers'>
                    <button onClick={this.fillup}>Kliknij mnie!</button>
                    <ul>
                        {this.state.array.map( i => <li key={i}>{i}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}