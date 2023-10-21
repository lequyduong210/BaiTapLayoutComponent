import React, { Component } from "react";
import "../css/Header.css";

export default class header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container px-lg-5">
          <span>Start Bootstrap</span>

          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
