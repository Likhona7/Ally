import React from 'react';
import Message from "./Message.js";

var MessageHistory = React.createClass({
  getInitialState() {
    return (
      {
        messages: this.props.messages
      }
    );
  },

  componentDidUpdate() {
    var objDiv = document.getElementById('message_box');
    objDiv.scrollTop = objDiv.scrollHeight;
  },

  render() {
    return(
      <div className="message_history" id="message_history">
        {
          this.state.messages.map(function(message, i) {
            return(
              <Message key={i} message={message}></Message>
            );
          })
        }
      </div>
    );
  }
});

export default MessageHistory;
