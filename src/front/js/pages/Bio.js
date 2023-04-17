import React, { useState, useContext } from "react";
import BioInfo from "../component/BioInfo.js";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Bio = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  let ownerData = store.owner.filter((elm) => {
    if (elm.num == params.name) {
      console.log("elm=", elm);
      return elm;
    }
  });
  console.log("owner data", ownerData);
  return (
    <div className="page-container">
      {ownerData.map((items) => (
        // console.log("printing reource info...", items),
        <div className="row mt-5" key={items.id}>
          <BioInfo
            name={items.name}
            bio={items.bio}
            email={items.email}
            phone={items.phone}
            image={items.lastName}
            num={items.num}
            title={items.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Bio;
