import React from "react";
import berrin from "../../img/berrin.png";
import fisher from "../../img/fisher.png";
import PrincipalCard from "../component/PrincipalCard";

const Principals = () => {
  return (
    <div className="principals-container row">
      <div className="col bio-col-1">
        {" "}
        <PrincipalCard
          name="Robert G. Berrin"
          image={berrin}
          email="rberrin@capital-realty.com"
          phone="305-992-3783"
          num="1"
          nickName="Robert"
        />
      </div>
      <div className="col bio-col-2">
        <PrincipalCard
          name="Isaac K. Fisher"
          image={fisher}
          email="ike@capital-realty.com"
          phone="305-903-8632"
          num="2"
          nickName="Isaac"
        />
      </div>
    </div>
  );
};

export default Principals;
