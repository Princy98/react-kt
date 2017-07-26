import React, { Component } from 'react';

const tools = ['React', 'Webpack', 'Node', 'Sublime'];

class StateExample extends Component {
    constructor(props) {
        super(props);

        // Initializing the state here.
        this.state = {
            tools: [],
        };
        this._getTools = this._getTools.bind(this);
    }

    _getTools() {
        this.setState({
            tools
        });
    }

    render() {
        const { tools } = this.state;
        return (
            <div className="state-example">
                <h2>Working with State</h2>
                <p>List of Tools</p>

                {tools.length > 0 ? tools.map((tool, index) => {
                    return <li key={index}>{tool}</li>
                }) : <li>'No Toolds Found'</li> }

                <button onClick={this._getTools}>Get Tools</button>
                
            </div>
        )
    }
}

export default StateExample;