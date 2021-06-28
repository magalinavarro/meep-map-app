import React, { Component } from "react";
import MeepLogo from "./components/meep-logo";
import SearchBar from "./components/search-bar";
import VehicleDetails from "./components/vehicle-details";
import MainMenu from "./components/main-menu";
import GoogleMaps from "./components/google-maps";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 col-md-2 back-first-column">
              <MeepLogo />
              <MainMenu />
              <div>
                <SearchBar />
                <VehicleDetails />
              </div>
            </div>
              <GoogleMaps/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
