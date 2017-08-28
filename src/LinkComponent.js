import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LinkComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            href: '#',
            updateComponent: false
        }

        this._handleClick = this._handleClick.bind(this);
    }

    componentWillMount() {
        console.log('LinkComponent: componentWillMount!');
    }

    componentDidMount() {
        console.log('LinkComponent: componentDidMount!');
    }

    componentWillReceiveProps(nextProps) {
        console.log('LinkComponent: Printing updated props inside componentWillReceiveProps!', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LinkComponent: shouldComponentUpdate!');
        console.log('LinkComponent: updated Props inside shouldComponentUpdate?', nextProps);
        console.log('LinkComponent: updated state inside shouldComponentUpdate?', nextState);
        
        if(!nextState.updateComponent) {            
            return false;
        }else{
            return true;
        }
    }

    componentWillUpdate() {
        console.log('LinkComponent: componentWillUpdate!');
    }

    componentDidUpdate() {
        console.log('LinkComponent: componentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('LinkComponent: componentWillUnmount!');        
    }

    _handleClick(e) {
        e.preventDefault();
        this.setState({
            updateComponent: true
        });
    }

     unmount() {
       ReactDOM.unmountComponentAtNode(document.getElementById('test-one'));
    }

    render() {
        return(
            <div>
                <a href={this.props.href} onClick={this._handleClick}>Google</a>
                {this.state.updateComponent && <b>Component Updated! <button onClick={this.unmount.bind(this)}>Unmount</button></b>}
            </div>
        )
    }
}

LinkComponent.propTypes = {
    href: PropTypes.string
}

LinkComponent.defaultProps = {
    href: 'https://google.com'   
}

export default LinkComponent;