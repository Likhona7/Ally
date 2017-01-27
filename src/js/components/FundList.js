import React from 'react';
import './Messaging.css';
import {socket} from "./Input.js";
import timer from './Time.js';

var FundList = React.createClass ({

  showDataChoices(account_choice) {
    let message = {
      id: socket.id,
      message: account_choice,
      from: "user",
      time: timer.chaTime()
    };

    socket.emit("user_message", message);
  },

  render()
  {
    return (
      <div id="extra-info">
        <h5>Get Fund Info For:</h5>
          <ol>
          <li className="list-options" onClick={() => this.showDataChoices(1)}><a>Absa Smart Alpha Equity</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(2)}><a>Allan Gray Equity</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(3)}><a>Cadiz Mastermind</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(4)}><a>Coronation Top 20</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(5)}><a>Counterpoint MET Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(6)}><a>Grindrod Equity Income Growth</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(7)}><a>Investec Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(8)}><a>Momentum Multifocus Fund of Funds</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(9)}><a>Nedgroup Inv Rainmaker</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(10)}><a>Oasis Crescent Equity </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(11)}><a>Old Mutual Industrial </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(12)}><a>Old Mutual Top 40 </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(13)}><a>Sanlam Investment Management Resources</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(14)}><a>Sanlam Investment Management Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(15)}><a>Sygnia Value Fund</a></li>
          </ol>
      </div>
    );
  }
});

  export default FundList;
