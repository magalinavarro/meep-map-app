import React from "react";
import "./meep-logo.css";
import "bootstrap/dist/css/bootstrap.css";

class MeepLogo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img
          src="https://meep.app/wp-content/uploads/2017/12/171031_Logo-Meep.png"
          alt=""
          className="logo-img"
        />
      </div>
    );
  }
}

export default MeepLogo;
