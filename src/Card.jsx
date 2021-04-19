import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img class="card-img-top" src={props.imgsrc} alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            <p class="card-text">we are provide you awesome websites</p>
            <NavLink to="/home" class="btn btn-primary">
              Get Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
