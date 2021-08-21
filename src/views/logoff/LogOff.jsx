import React from "react";
import BaseComponent from "../../components/BaseComponent";

export default class LogOff extends BaseComponent {
  componentDidMount() {
    // window.location.reload();
  }

  render() {
    return (
      <div className="home_page">
        <p>Logging out from App!!!</p>
      </div>
    );
  }
}

LogOff.defaultProps = {
  id: "logout",
  name: "logout",
};
