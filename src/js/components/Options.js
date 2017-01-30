import React from 'react';
import './Messaging.css';
import {socket} from "./Input.js";

var Options = React.createClass ({

  showFunds() {
    let message = {
      id: socket.id,
      message: "1"
    };

    socket.emit("user_message", message);
  },

  render() {
    return(
      <div id="container">
        <div id="thumbs">
            <li id="info_option_1" className="list-options" onClick={this.showFunds}><a>1. Fund Info</a></li>
            <li className="list-options"><a id="info_option_2" href="https://www.allangray.co.za/what-we-offer/investing-with-us/" target="_blank">2. Product Info</a></li>
            <li className="list-options"><a id="info_option_3" href="https://www.google.co.za/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=active&q=allan+gray+location&rflfq=1&rlha=0&rllag=-33922312,18416057,1727&tbm=lcl&tbs=lf_msr:-1,lf_od:-1,lf_oh:-1,lf_pqs:EAE,lf:1,lf_ui:2" target="_blank">3. Location</a></li>
            <li className="list-options"><a id="info_option_4" href="https://www.allangray.co.za/faq/#1" target="_blank">4. FAQ</a></li>
        </div>
      </div>
    )
  }
});

export default Options;
