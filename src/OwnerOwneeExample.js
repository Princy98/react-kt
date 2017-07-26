import React, { Component } from 'react';

class OwnerOwneeExample extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        };

        this._update = this._update.bind(this);
    }

    _update(e) {
        this.setState({
            text: e.target.value,
        })
    }

    render() {
        return (
            <div className="owner-ownee-example">
                <h2>Owner-Ownee Relationship</h2>
                <p>
                    The owner-ownee relationship is used to designate a parent-child relationship 
                    with React components as it differs from the DOM relationship. This example 
                    demonstrates how composable React can be when using stateless functions to 
                    display data.
                </p>
                <Widget text={this.state.text} _update={this._update} />
                <Widget text={this.state.text} _update={this._update} />
            </div>
        )
    }
}

const Widget = (props) => {
    return (
        <div className="input-text-container">
            <input type="text" onChange={props._update} />
            <h3>Value: {props.text}</h3>
        </div>
    )
}

export default OwnerOwneeExample;