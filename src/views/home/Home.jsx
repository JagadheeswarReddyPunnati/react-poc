import React from "react";
import BaseComponent from "../../components/BaseComponent";

export default class Home extends BaseComponent {
  render() {
    return (
      <div className="home_page">
        <p>Welcome to AppName!!!</p>
      </div>
    );
  }
}

Home.defaultProps = {
  id: "home",
  name: "home"
};