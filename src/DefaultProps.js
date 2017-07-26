import React, { Component } from 'react';

class DefaultProps extends Component {
    render() {
        return (
            <div className="default-props">
                <ul>
                    <li>Author: {this.props.author}</li>
                    <li>Editor: {this.props.editor}</li>
                </ul>
            </div>
        );
    }
}

DefaultProps.defaultProps = {
    author: 'No Author Specified',
    editor: 'No Editor Specified',
};

export default DefaultProps;