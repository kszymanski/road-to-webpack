export default class Hello extends React.Component {
    render(){
        return React.createElement('div',{}, 
            React.createElement('h1', {}, "Cześć"),
            React.createElement('h2', {}, "Ta strona działa bez budowania!!!"),
            React.createElement('p', { className: 'how-to' }, "Poprostu zainstaluj http-server i odpal :)")
            );
    }
}