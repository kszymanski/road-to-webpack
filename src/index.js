import App from './containers/app.js';
import {BrowserRouter as Router} from 'react-router-dom';
import(/* webpackChunkName: "react" */ 'react').then(({default: React}) => {
  import(/* webpackChunkName: "react" */ 'react-dom')
    .then(({ default: ReactDOM}) => {
      ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
    })
});