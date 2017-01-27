import React, { Component } from 'react';
import {Link} from "react-router";
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">

              <div className="App-intro">
                <h1>ALLIE IS HERE FOR YOU.</h1>
              </div>
              <div className="buttons_box">
                <Link to="/chat">
                  <div className="start_button"> Ask Allie Something...</div>
                </Link>
              </div>

      </div>
    );
  }
}
