import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Video from "../component/Video";
import logo from "../../img/CAPITALRLOGO7.png";
import logo2 from "../../img/CAPITALRLOGO6.png";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="welcome">
        <Video />

        <img className="home-logo" src={logo}></img>
      </div>
      <div className="page-container">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            {/* <img className="home-logo-2" src={logo2}></img> */}
            {/* <h2>WHAT WE DO</h2> */}
          </div>
          <div className="col-9">
            <h3>CAPITAL REALTY SERVICES INC.</h3>
            <p className="about">
              We provide a myriad of services in the real estate sector. Sales &
              Acquisition, Mortgage Brokerage, Investment, Tenant Representation
              & Site Selection, Leasing & Property/Asset Management as well as
              Consulting & Litigation Support. We do it all. We are a team of
              highly motivated, aggressive real estate professionals driven to
              continually expand on an already impressive record of
              accomplishments. We possesses the diversity and talent required to
              execute complex real estate ventures with expertise in sales and
              acquisitions, financing, leasing, tenant representation,
              management, consulting, construction and development. We meet the
              varied needs of individual and institutional clients through our
              relationship orientation and commitment to providing the highest
              level of service.
            </p>
            <a href={"/services"} className="btn bio-btn">
              Learn More About Our Services
            </a>
          </div>
        </div>
        <hr className="new1" />
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <h2>LEADERSHIP</h2>
          </div>
          <div className="col-9">
            <div>
              <h3>ROBERT BERRIN</h3>
              {/* <h5>PRESIDENT | CO-OWNER</h5> */}
              <p className="about">
                {" "}
                Robert G. Berrin is a real estate investor and the President and
                Co-Owner of Capital Realty Services, Inc. (since October 1988),
                a full service commercial real estate brokerage firm,
                specializing in the management and leasing of commercial
                properties, exclusive tenant representation, as well as
                acquisition and sale of commercial properties. His professional
                experience also includes consultation with real estate clients
                regarding sales, leasing, management and financing
                considerations of real estate ownership, sales or acquisition.
                Since July 1972, Mr. Berrin has also been the promoter and
                managing general partner of numerous real estate properties,
                primarily commercial and income producing and is also
                responsible for the management, leasing and disposition of said
                properties, together with his business partner in Capital
                Realty, Isaac K. Fisher.
              </p>
              <a href={"/bio/1"} className="btn bio-btn">
                Learn More About Robert
              </a>
            </div>
            <hr className="new1" />
            <div>
              <h3>ISAAC FISHER</h3>
              {/* <h5>CO-OWNER</h5> */}
              <p className="about">
                {" "}
                Mr. Fisher is a real estate investor and a principal of Capital
                Realty Services, Inc., a diversified real estate company
                providing management, leasing, financing, sales and consulting
                services for commercial investments. He has been a partner in
                commercial real estate with Robert G. Berrin through Capital
                Realty since 1988. Prior to joining Capital Realty, he was vice
                president of Sonnenblick-Goldman Southeast Corp. Earlier in his
                career, Mr. Fisher practiced law in a variety of capacities in
                Florida and in Tel Aviv, Israel. He is a member of the Florida
                Bar, and an inactive member of the Israel Chamber of Advocates.
              </p>
              <a href={"/bio/2"} className="btn bio-btn">
                Learn More About Isaac
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
