import React from "react";
import "./google-maps.css";
import "bootstrap/dist/css/bootstrap.css";

class GoogleMaps extends React.Component {
  render() {
    return (
      <div className="col-13 col-md-6 back-second-column">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1BFfoMRQl9-cPC6_q3r2IrpI3-t9BoK_r"
          width="170%"
          height="650px"
        ></iframe>
      </div>
    );
  }
}

export default GoogleMaps;
