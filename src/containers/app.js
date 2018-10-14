import Hello from '../components/hello.js';

export default class App extends React.Component {
    render(){
        return React.createElement('div',{className: "container"}, React.createElement(Hello));
    }
}