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
          <li className="list-options" onClick={() => this.showDataChoices(1)}><a>1. Absa Smart Alpha Equity</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(2)}><a>2. Allan Gray Equity</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(3)}><a>3. Cadiz Mastermind</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(4)}><a>4. Coronation Top 20</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(5)}><a>5. Counterpoint MET Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(6)}><a>6. Grindrod Equity Income Growth</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(7)}><a>7. Investec Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(8)}><a>8. Momentum Multifocus Fund of Funds</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(9)}><a>9. Nedgroup Inv Rainmaker</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(10)}><a>10. Oasis Crescent Equity </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(11)}><a>11. Old Mutual Industrial </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(12)}><a>12. Old Mutual Top 40 </a></li>
          <li className="list-options" onClick={() => this.showDataChoices(13)}><a>13. Sanlam Investment Management Resources</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(14)}><a>14. Sanlam Investment Management Value</a></li>
          <li className="list-options" onClick={() => this.showDataChoices(15)}><a>15. Sygnia Value Fund</a></li>
          </ol>
      </div>
    );
  }
});

  export default FundList;
