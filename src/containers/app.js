import React, { Component } from 'react';
import {Route, Link } from "react-router-dom";

import Loadable from 'react-loadable';

class Dupa extends Component {
    render() {
        return <div>Loading...</div>;
    }
}

const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../components/hello.js'),
    loading: Dupa,
    delay: 5000
  });

const LoadableBayComponent = Loadable({
    loader: () => import(/* webpackChunkName: "bay" */ '../components/bay.js'),
    loading: Dupa,
    delay: 5000
  });

export default class App extends Component {
    render() {
        return <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={LoadableComponent} />
          <Route exact path="/about" component={LoadableBayComponent} />
        </div>
    }
}