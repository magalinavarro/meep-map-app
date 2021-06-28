import React from "react";
import "./main-menu.css";
import "bootstrap/dist/css/bootstrap.css";

class MainMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Viajes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mis tarjetas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Preferencias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1">
              Menú
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default MainMenu;
