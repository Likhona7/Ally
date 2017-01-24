import React from 'react';
import {render} from 'react-dom';
import {Component} from 'react';
import './Messaging.css';
import ReactDOM from "react-dom";
import MessageHistory from "./MessageHistory.js";

var Options = React.createClass ({

  render() {
    return(
        <div id="hide" id="container">
           <div id="thumbs">
              <li className="list-options"><a>Fund Info</a></li>
              <li className="list-options"><a href="https://www.allangray.co.za/what-we-offer/investing-with-us/">Product Info</a></li>
              <li className="list-options"><a href="https://www.google.co.za/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#safe=active&q=allan+gray+location&rflfq=1&rlha=0&rllag=-33922312,18416057,1727&tbm=lcl&tbs=lf_msr:-1,lf_od:-1,lf_oh:-1,lf_pqs:EAE,lf:1,lf_ui:2">Location</a></li>
              <li className="list-options"><a href="https://www.allangray.co.za/faq/#1">FAQ</a></li>
           </div>
      </div>
    )
  }
});

export default Options;
