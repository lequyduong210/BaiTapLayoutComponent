import React, { Component } from "react";
import "../css/Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner_container mt-5">
          <div className="content">
            <h1 className="font-weight-bold">A warm welcome!</h1>
            <span className="mb-3">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </span>
            <button className="btn btn-primary btn-lg">Call to action</button>
          </div>
        </div>
      </div>
    );
  }
}
