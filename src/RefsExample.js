import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RefsExample extends Component {
    constructor() {
        super()
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        };

        this._update = this._update.bind(this);
    }

    _update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value,
        })
    }

    render() {
        return (
            <div className="refs-example-container">
                <h2>Accessing nodes using refs</h2>
                <Slider ref="red" update={this._update} />
                {this.state.red}
                <br/>
                <Slider ref="green" update={this._update} />
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this._update} />
                {this.state.blue}
                <br/>
            </div>
        )
    }
}

class Slider extends Component {
    render() {
        return (
            <input type="range" min="0" max="255" onChange={this.props.update} />
        )
    }
}
export default RefsExample;