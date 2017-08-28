import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LinkComponent from './LinkComponent';

class ComponentLifecycleEx extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };

        this._update = this._update.bind(this);
    }

    componentWillMount() {
        console.log('Component Will Mount!');
        this.setState({ multiplier: 2});
    }

    componentDidMount() {
        console.log('Component Mounted!');
        this._inc = setInterval(this._update, 500);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Printing updated props inside componentWillReceiveProps!', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update?');
        console.log('Printing updated Props inside shouldComponentUpdate?', nextProps);
        console.log('Printing updated state inside shouldComponentUpdate?', nextState);
        
        if(nextState.value === 5) {
            clearInterval(this._inc);
            return false;
        }else{
            return true;
        }
    }

    componentWillUpdate() {
        console.log('Component will update');
    }

    componentDidUpdate() {
        console.log('Component Did Update!');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount!');
        clearInterval(this._inc);
    }

    _update() {
        this.setState({
            value: this.state.value + 1,
        });
    }

    render() {
        console.log('Rendering the component!');
        return (
            <div className="component-lifecycle-methods">
                <button onClick={this._update}>{this.state.value * this.state.multiplier}</button>
            </div>
        )
    }
}

class Wrapper extends Component {
    constructor() {
        super();
        this.state = {
           hideButton: false 
        }
    }
    mount() {
        ReactDOM.render(<ComponentLifecycleEx />, document.getElementById('test-one'));
    }

    _hideButton() {
        this.setState({
            hideButton: true
        })
        //ReactDOM.unmountComponentAtNode(document.getElementById('test-one'));
    }

    render() {
        return (
            <div>
                <h3>React Component Lifecycle</h3>
                <button onClick={this.mount.bind(this)}>Mount</button>
                {this.state.hideButton  && <LinkComponent /> }
                {!this.state.hideButton && <button onClick={this._hideButton.bind(this)}>Hide Button</button> }
                <div id="test-one"></div>
            </div>
        )
    }
}
export default Wrapper;