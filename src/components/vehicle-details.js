import React from "react";
import "./vehicle-details.css";
import "bootstrap/dist/css/bootstrap.css";

class VehicleDetails extends React.Component {
  render() {
    return (
      <div>
        <h3 className="vehicle-details-title">Detalles del vehículo</h3>
        <div className="details-container">
          <h4 className="vehicle-details-subtitle">Matrícula</h4>
          <h4 className="vehicle-details-info">LVF7428</h4>
          <h4 className="vehicle-details-subtitle">Modelo</h4>
          <h4 className="vehicle-details-info">Volkswagen Golf</h4>
          <h4 className="vehicle-details-subtitle">Coordenadas</h4>
          <h4 className="vehicle-details-info">
            Lat: 38.739429 | Lon: -9.137115
          </h4>
        </div>
        <div className="button-container">
          <span
            className="d-inline-block"
            tabindex="0"
            data-bs-toggle="tooltip"
            title="✅ 40% de carga"
          >
            <button class="btn btn-secondary" type="button">
              Estado de la batería
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default VehicleDetails;
