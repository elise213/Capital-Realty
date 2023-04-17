import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Video from "../component/Video";
import logo from "../../img/CAPITALRLOGO4.png";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Video />
      <div className="welcome">
        {/* <div className="overlay"> */}
        <img className="home-logo" src={logo}></img>
        {/* </div> */}
      </div>
      <div className="page-container">
        <h1>OUR SERVICES</h1>
        <p className="services">
          We provide a myriad of services in the real estate sector. Sales &
          Acquisition, Mortgage Brokerage, Investment, Tenant Representation &
          Site Selection, Leasing & Property/Asset Management as well as
          Consulting & Litigation Support. We do it all.
        </p>
        <hr className="new1" />
        <p className="services">
          {" "}
          We are a team of highly motivated, aggressive real estate
          professionals driven to continually expand on an already impressive
          record of accomplishments.{" "}
        </p>
        <hr className="new1" />
        <p className="services">
          {" "}
          We possesses the diversity and talent required to execute complex real
          estate ventures with expertise in sales and acquisitions, financing,
          leasing, tenant representation, management, consulting, construction
          and development.{" "}
        </p>
        <hr className="new1" />
        <p className="services">
          {" "}
          We meet the varied needs of individual and institutional clients
          through our relationship orientation and commitment to providing the
          highest level of service.
        </p>
        <hr className="new1" />
        <a href={"/services"} className="btn bio-btn">
          Learn More About Our Services
        </a>
      </div>
    </div>
  );
};
