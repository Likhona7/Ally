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
          <li className="list-options" onClick={() => this.sendDataRequest(1)}><a>Start Unit Balance</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(2)}><a>Start Unit Price</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(3)}><a>Start Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(4)}><a>Start Ratio</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(5)}><a>Total Start Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(6)}><a>Start Unallotted Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(7)}><a>Total Start Market Value Incl Unallotted</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(8)}><a>End Unit Balance</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(9)}><a>End Unit Price</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(10)}><a>End Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(11)}><a>End Ratio</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(12)}><a>Total End Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(13)}><a>End Unallotted Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(14)}><a>Total End Market Value Incl Unallotted</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(15)}><a>Currency Symbol</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(16)}><a>Currency Name</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(17)}><a>Account Number</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(18)}><a>Start Net Market Value</a></li>
          <li className="list-options" onClick={() => this.sendDataRequest(19)}><a>End Net Market Value</a></li>
        </ul>
      </div>
    );
  }
});

  export default DataList;
