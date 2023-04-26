import React from "react";
import Prop1 from "../../img/Ponce.jpg";
import Prop2 from "../../img/Dadeland.jpg";

const Properties = () => {
  return (
    <div className="page-container">
      <h1 className="current-props-title">CURRENT PROPERTIES</h1>
      <img className="property-image" src={Prop2}></img>
      <p className="properties-text">Dadeland Executive Plaza</p>
      <p>Miami, FL</p>
      <img className="property-image" src={Prop1}></img>
      <p className="properties-text">Ponce Plaza Office Building</p>
      <p>Coral Gables, FL</p>

      <p className="properties-text">Gables Plaza Office Building</p>
      <p>Coral Gables, FL</p>
      <p className="properties-text">Red Lobster Restaurant Net Lease</p>
      <p>Hialeah, FL</p>
      <p className="properties-text">Wendy’s Restaurant Net Lease</p>
      <p>Memphis, TN</p>
      <p className="properties-text">Mavis Tire Center Net Lease</p>
      <p>Bradenton, FL</p>
      <p className="properties-text">Red Lobster Net Lease</p>
      <p>Austin, TX</p>
      <h1>PAST PROPERTIES</h1>
      <p className="properties-text">Kendall Summit Office Park</p>
      <p>Miami, FL</p>
      <p className="properties-text">Doral Executive Office Building</p>
      <p>Miami, FL</p>
      <p className="properties-text">Bank of America Office Building</p>
      <p>Hollywood, FL</p>
      <p className="properties-text">Medical Specialties Office Building</p>
      <p>Miami, FL</p>
      <p className="properties-text">Bank Net Lease</p>
      <p>Aventura (Miami), FL</p>
    </div>
  );
};

export default Properties;
