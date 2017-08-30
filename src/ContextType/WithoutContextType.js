import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    );
  }
}

export default class MessageList extends React.Component {
  render() {
    const color = "green";
    const children = this.props.messages.map((message, index) =>
      <Message text={message.text} color={color} key={index} />
    );
    return <div>{children}</div>;
  }
}