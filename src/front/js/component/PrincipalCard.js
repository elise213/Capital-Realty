import React from "react";

const PrincipalCard = (props) => {
  return (
    <div className="resource-card row">
      <div className="card-header d-flex">
        <h3>{props.name}</h3>
      </div>
      <div className="row card-body">
        <img className="card-img" src={props.image} alt="profile picture" />
      </div>
      <div className="card-body">
        <p>{props.email}</p>
        <p> {props.phone}</p>
        <a href={"/bio/" + props.num} class="btn bio-btn">
          Read {props.nickName}'s bio
        </a>
      </div>
    </div>
  );
};

export default PrincipalCard;
