import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    mount() {
        ReactDOM.render(<ComponentLifecycleEx />, document.getElementById('test-one'));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('test-one'));
    }

    render() {
        return (
            <div>
                <h3>React Component Lifecycle</h3>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="test-one"></div>
            </div>
        )
    }
}
export default Wrapper;