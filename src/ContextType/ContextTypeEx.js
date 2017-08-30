import React from 'react';
const PropTypes = require('prop-types');

class Button extends React.Component {
    render() {
      return (
        <button style={{background: this.context.color}}>
          {this.props.children}
        </button>
      );
    }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
    render() {
      return (
        <div>
          {this.props.text} <Button>Delete</Button>
        </div>
      );
    }
}

export default class MessageList extends React.Component {
    getChildContext() {
      return {color: "green"};
    }

    render() {
      const children = this.props.messages.map((message, index) =>
        <Message text={message.text} key={index} />
      );
      return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};