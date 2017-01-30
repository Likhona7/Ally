import React from 'react';
import './Messaging.css';
import timer from './Time.js';
import {socket} from "./Input.js";

var DataList = React.createClass ({

  sendDataRequest(data_choice)
  {
    let message = {
      id: socket.id,
      message: data_choice,
      from: "user",
      time: timer.chaTime()
    };

    socket.emit("user_message", message);
  },

  render()
  {
    return (
      <div id="deep-info">
        <h5>In Account: {this.props.account}</h5>
        <h6>Give Me:</h6>
        <ul>
          <li className="list-options" onClick={() => this.sendDataRequest(1)}><a>1. Unit Balance</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(2)}><a>2. Unit Price</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(3)}><a>3. Current Fund Balance</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(4)}><a>4. Fund Allocation Percentage</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(5)}><a>5. Total Account Balance</a></li>
        </ul>
      </div>
    );
  }
});

  export default DataList;
